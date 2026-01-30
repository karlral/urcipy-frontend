import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Categoria } from 'src/app/domain/categoria';
import { Club } from 'src/app/domain/club';
import { ClubService } from 'src/app/service/club.service';
import { CorredorService } from 'src/app/service/corredor.service';
import { ParticipanteService } from 'src/app/service/participante.service';

@Component({
  selector: 'app-mod-corredor',
  templateUrl: './mod-corredor.component.html',
  styleUrls: ['./mod-corredor.component.css']
})
export class ModCorredorComponent  implements OnInit {

  @Input() selectedCorredor:any=null;
  @Input() idevento:any=null;

  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clickSave: EventEmitter<any> = new EventEmitter<any>();
 

  modalType="Registrar";

  clubes: Club[] = []; 
  club: Club | null = null;
 
  tipos: any[] = [];
  tamanos: any[] = [];

  fecha = new Date();

  idmodalidad=1;
 

  corredorForm = this.fb.group({
    idcorredor:[0],
    ci: [''],
    corredor: [''],
    fecnac: [this.fecha],
    sexo: [1],
    telefono: [''],
    categoria: [''],
    nacionalidad: [''],
    ciudad: [''],
    pais: [''],
    carnetfpc: [0],
    puntua: [0],  
    tamano: [0],
    idpersona: [0],
    idcategoria: [0],
    verificar: [0],
    idclub: [0],
    tipocat: [0]
    
  });


  constructor(private fb: FormBuilder,

    private clubService: ClubService,
    
    private messageService: MessageService,
    private corredorService: CorredorService,
      
        private participanteService:ParticipanteService

  ) { }

ngOnChanges(changes: SimpleChanges): void {
    if (this.selectedCorredor){
       this.modalType="Siguiente";
      
      this.corredorForm.patchValue(this.selectedCorredor);
     console.log(this.selectedCorredor);
  
      const fecnac= new Date(this.selectedCorredor.fecnac);
     
      this.corredorForm.controls['fecnac'].setValue(fecnac);

      //this.eCategoria.idcategoria= this.selectedCorredor.idcategoria;

       //this.cargarCategoria(this.eCategoria);

    }
  }

  ngOnInit(): void {  

    this.tipos = [
      { label: 'PRINCIPAL', value: 1 },
      { label: 'PRINCIPAL-ELITE', value: 2 },
      { label: 'PROMOCIONAL', value: 3 },
      { label: 'PROMOCIONAL+100K', value: 4 },
      { label: 'TOUR EXPERIENCE', value: 5 }
    ];

    this.clubService.listarClubes().subscribe(
     { 
      next:  (dato: any) => {
        this.clubes = dato;
        this.club = this.clubes[0];
        
      }, 
      error: (error) => {
        console.log(error);
        this.messageService.add({
          severity: "error",
          summary: "Club",
          detail: "Error al cargar el Club"
        });
      }
    });
    this.clubService.pubobtenerClub(this.selectedCorredor.idclub).subscribe(
      {
        next: (dato: any) => {
          this.club = dato;
        },
        error: (error) => {
          console.log(error);
          this.messageService.add({
            severity: "error",
            summary: "Club",
            detail: "Error al cargar el Club"
          });
        }
      });

   
   
  }

  
  closeModal() {
    this.corredorForm.reset();
    this.clickClose.emit(true);
  }

  extractNumberString(s: string) {
    return s.replace(/[^0-9]/g, "");
  }

  addEditCorredor() {
    

      this.corredorService.agregarCorredorRun(this.corredorForm.value).subscribe(
        {
          next: (dato) => {

           const clubControl = this.corredorForm.get('club');
           if (clubControl && clubControl.value) {
             this.club = clubControl.value;
           }

            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'El corredor ha sido agregada con exito', life: 3000 });

            //this.closeModal()
            
          }, error: (error) => {
            console.log(error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la corredor', life: 3000 });

          },
          complete: () => {
            console.log('Completo el agregar');
            this.formSubmit();


          }
        });



  }

  saveModal(participante:any) {
    this.corredorForm.reset();
    this.clickSave.emit(participante);
    
  }

  formSubmit(){
    let ci = this.corredorForm.get('persona')?.get('ci')?.value;
    this.participanteService.inscribirPartiCi(this.idevento,ci).subscribe(
      (data: any) => {
      
        this.saveModal(data);
        
     
      }, (error) => {
        console.log(error);
        
        this.messageService.add({
          key: 'bc',
          severity: "info",
          summary: "Atencion",
          detail: "No se encontro el numero de CI del corredor, complete sus datos."
        });
        
      });
  }

  cargarCategoria(cat:Categoria){
    if(cat){
      this.corredorForm.controls['idcategoria'].setValue(cat.idcategoria);
    }
    
    
  }

  
  
}
