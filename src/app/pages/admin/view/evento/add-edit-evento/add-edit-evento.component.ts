import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

import { Club } from 'src/app/domain/club';
import { Regional } from 'src/app/domain/regional';
import { ClubService } from 'src/app/service/club.service';
import { Datasys } from 'src/app/service/datasys';
import { EventoService } from 'src/app/service/evento.service';
import baserUrl from 'src/app/service/helper';
import system from 'src/app/service/helpersys';
import { MediaService } from 'src/app/service/media.service';

@Component({
  selector: 'app-add-edit-evento',
  templateUrl: './add-edit-evento.component.html',
  styleUrls: ['./add-edit-evento.component.css'],
  providers:[Datasys]
})
export class AddEditEventoComponent implements OnInit, OnChanges {
  @Input() displayAddEditModal: boolean = true;
  @Input() selectedEvento:any=null;

  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clickAddEdit: EventEmitter<any> = new EventEmitter<any>();

  modalType="Agregar";

  regional:Regional={
    idregional: system,
    nomregional: '',
    nomcorto: '',
    logo: '',
    telefono: '',
    direccion: '',
    email: '',
    ano: 0,
    presentacion: ''
  };

  clubes: Club[] = [];

  activos: any[] = [];
  ordenes: any[] = [];
  tipoeventos: any[] = [];
  modos: any[] = [];
  verencuestas: any[] = [];
  ranqueables:any[]=[];
  preinscripciones:any[]=[];

  fecha = new Date();
 
  // para agregar
  mediaLocation = `${baserUrl}/media/`;
  url?: String;
  currentFile?: File;
  fileName = '';
  preview = '';

  eventoForm = this.fb.group({
    idevento:[null],
    fecha: [this.fecha, Validators.required],
    nomevento: ['', Validators.required],
    activo: [4, Validators.required],
    direccion: [''],
    orden:[1],
    tipoevento: [0],
    modo: [0],
    verencuesta: [0],
    ranqueable: [0],
    preinscrip: [0],
    doble: [0],
    km: [0, Validators.required],
    kmpromo: [0, Validators.required],
    kmmenor: [0, Validators.required],
    informacion: ['', Validators.required],
    locales: ['', Validators.required],
    deposito: ['', Validators.required],
    urlpromocional: [''],
    urlcategoria: [''],
    contacto: [''],
    montopric: [100000],
    montopris: [100000],
    montomenc: [100000],
    montomens: [100000],
    fondocolor:[''],
    fondo: [''],
    club: [null],
    regional:[this.regional]
  });


  constructor(private fb: FormBuilder,
    private clubService: ClubService,
    private messageService: MessageService,
    private mediaService: MediaService,
    private eventoService: EventoService,
    private datasys:Datasys,

  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.selectedEvento){
      this.modalType="Guardar";
      
      this.eventoForm.patchValue(this.selectedEvento);

      const fecha2= new Date(this.selectedEvento.fecha);

      this.eventoForm.controls['fecha'].setValue(fecha2);
      

    }else{
      this.eventoForm.reset({
    
        fecha:this.fecha,
        activo:4,
        tipoevento:0,
        modo:0,
        verencuesta:0,
        ranqueable:1,
        preinscrip:1,
        montopric: 100000,
        montopris: 100000,
        montomenc: 100000,
        montomens: 100000,
        doble: 0
    

      });
      this.modalType="Agregar";
    }
  }

  ngOnInit(): void {

    this.activos = [
      { label: 'PROXIMAMENTE',value: -1 },
      { label: 'Culminado',   value: 0 },
      { label: '1er Activo',  value: 1 },
      { label: '2do Activo',  value: 2 },
      { label: '3er Activo',  value: 3 },
    ];

    /* this.ordenes = [
      { label: 'Primera', value: 1 },
      { label: 'Segunda', value: 2 },
      { label: 'Tercera', value: 3 },
      { label: 'Cuarta',  value: 4 },
      { label: 'Quinta',  value: 5 },
      { label: 'Sexta',   value: 6 },
      { label: 'Septima', value: 7 },
      { label: 'Octava',  value: 8 },
      { label: 'Novena',  value: 9 },
      { label: 'Decima',  value: 10 }
    ]; */

    this.datasys.getOrdenes().then(data =>{
      this.ordenes=data;
    });

    this.tipoeventos = [
      { label: 'XCM',   value: 0 },
      { label: 'XCO',  value: 1 },
      { label: 'RUTA',  value: 2 }
    ];
    this.modos = [
      { label: 'EN PROCESO',   value: 0 },
      { label: 'HISTORIAL',  value: 1 },
      { label: 'PLANIFICADO',  value: 2 }
    ];
    this.verencuestas = [
      { label: 'NO',   value: 0 },
      { label: 'SI',  value: 1 },
      { label: 'RESULTADOS',  value: 2 }
    ];
    this.ranqueables = [
      { label: 'NO',   value: 0 },
      { label: 'SI',  value: 1 },
      { label: 'SI Y NACIONAL',  value: 2 }
    ];
    this.preinscripciones = [
      { label: 'NO',   value: 0 },
      { label: 'SI',  value: 1 },
      { label: 'LISTADO',  value: 2 },
      { label: 'Link Externo',  value: 3 }
    ];

    this.clubService.listarClubes().subscribe(
      (dato: any) => {
        this.clubes = dato;
     
      }, (error) => {
        console.log(error);
        this.messageService.add({
          severity: "error",
          summary: "Club",
          detail: "Error al cargar el Club"
        });
      }
    );

  }
  

  closeModal() {
    this.eventoForm.reset();
    this.clickClose.emit(true);
  }

  mostrarVarEvento() {
    
  }

  addEditEvento() {


    if (this.currentFile) {
      const formData = new FormData();
      formData.append('file', this.currentFile);

      this.mediaService.uploadFile(formData).subscribe(
        {
          next: response => {
            console.log('response', response);
            this.url = response.url;
          },
          error: errores => {
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al cargar el archivo', life: 3000 });
            return;
          }
        }

      );
/* 
      console.log('nombre de archivo'+this.fileName);
      this.eventoForm.setValue({"fondo":this.fileName});
      this.eventoForm.get('fondo')?.setValue('acusados.jpg');
      console.log('nombre de archivo'+this.fileName);
      console.log('nombre de archivo evento'+this.eventoForm); */
    }

    if (this.selectedEvento) {


      this.eventoService.actualizarEvento(this.eventoForm.value).subscribe(
        {
          next: (dato) => {

            this.clickAddEdit.emit(dato);
            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'La evento ha sido actualizada con exito', life: 3000 });
            this.closeModal();
          }, error: (error) => {
            console.log("ERROR AL GUARDAR EL EVENTO"+error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la actualizacion de evento', life: 3000 });

          },
          complete: () => {
            console.log('Completo al actualizar');

          }
        });


    }
    else {

    

      this.eventoService.agregarEvento(this.eventoForm.value).subscribe(
        {
          next: (dato) => {

           
            this.clickAddEdit.emit(dato);

            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'El evento ha sido agregada con exito', life: 3000 });

            this.closeModal()
            
          }, error: (error) => {
            console.log(error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la evento', life: 3000 });

          },
          complete: () => {
            console.log('Completo el agregar');

          }

        }
      )

    }


  }

  duplicarEvento() {

    this.eventoForm.controls['idevento'].setValue(null);
    this.eventoForm.controls['modo'].setValue(2);
    if (this.selectedEvento) {

      this.eventoService.actualizarEvento(this.eventoForm.value).subscribe(
        {
          next: (dato) => {

            this.clickAddEdit.emit(dato);
            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'El evento ha sido duplicado con exito', life: 3000 });
            this.closeModal();
          }, error: (error) => {
            console.log("ERROR AL GUARDAR EL EVENTO"+error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la duplicacion de evento', life: 3000 });

          },
          complete: () => {
            console.log('Completo Duplicacion');

          }
        });


    }
    


  }

  selectFile(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];

      
      
      this.currentFile = file;

      this.fileName = this.currentFile.name;
      console.log(this.fileName);
      this.eventoForm.controls['fondo'].setValue(this.fileName ? this.fileName : '');
      /*** para mostrar antes de enviar y guardar */

      this.preview = '';

      const reader = new FileReader();

      reader.onload = (e: any) => {
  
        this.preview = e.target.result;
      };

      reader.readAsDataURL(this.currentFile);

      //**** */
    } else {
      this.fileName = '';
    }
  }

}
