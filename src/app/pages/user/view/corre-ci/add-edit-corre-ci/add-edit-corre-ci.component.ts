import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Categoria } from 'src/app/domain/categoria';
import { Ciudad } from 'src/app/domain/ciudad';
import { Club } from 'src/app/domain/club';
import { Pais } from 'src/app/domain/pais';
import { Trayecto } from 'src/app/domain/trayecto';
import { Usuario } from 'src/app/domain/usuario';
import { CiudadService } from 'src/app/service/ciudad.service';
import { ClubService } from 'src/app/service/club.service';
import { CorredorService } from 'src/app/service/corredor.service';
import baserUrl from 'src/app/service/helper';
import { LoginService } from 'src/app/service/login.service';
import { MediaService } from 'src/app/service/media.service';
import { PaisService } from 'src/app/service/pais.service';

@Component({
  selector: 'app-add-edit-corre-ci',
  templateUrl: './add-edit-corre-ci.component.html',
  styleUrls: ['./add-edit-corre-ci.component.css']
})
export class AddEditCorreCiComponent  implements OnInit, OnChanges {

  @Input() selectedCorredor:any=null;

  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
 

  modalType="Agregar";

  clubes: Club[] = [];
  
  ciudades: Ciudad[] = [];
  paises: Pais[] = [];

  tipos: any[] = [];
  grupos: any[] = [];

  user: any;
  fecha = new Date();
 
  fechaant=new Date(2000, 0, 1);

  trayecto:Trayecto={
    idtrayecto: 0,
    nomtrayecto: '',
    km: 0
  }

  eCategoria:Categoria={
    idcategoria: 0,
    nomcategoria: '',
    activo: false,
    nomcorto: '',
    orden: 0,
    tanda: 0,
    ascenso: false,
    activonacional: 0,
    edadinicio: 0,
    edadfin: 0,
    sexo: 0,
    tipo: 0,
    trayecto:this.trayecto
  };

  // para agregar
  mediaLocation = `${baserUrl}/media/`;
  url?: String;
  currentFile?: File;
  fileName = '';
  preview = '';



  usuario: Usuario = {
    idusuario: 0,
    nombre: '',
    apellido: '',
    telefono: '',
    perfil: '',
    email: '',
    username: '',
    password: '',
    enabled: false
  }
 

  corredorForm = this.fb.group({
    idcorredor:[null],
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    ci: ['', Validators.required],
    sexo: [-1, Validators.required],
    fecnac: [this.fechaant, Validators.required],
    telefono: ['', Validators.required],
    direccion: [''],
    email: [''],
    verificar: [2],
    nacionalidad: ['Paraguaya', Validators.required],
    carnet: [''],
    carnetatras: [''],
    foto: [''],
    cidelante: [''],
    tipocat: [1, Validators.required],
    tutorp: [''],
    citp: [''],
    licencia: [0],
    modificar: [false],
    gruposanguineo: [''],
    puntua: [0],
    fecmodi: [this.fecha],
    montopuntua: [0],
    carnetfpc: [0],
    observacion: [''],
    categoria: [this.eCategoria],
    ciudad: [null],
    club: [null],
    usuario: [this.usuario]
    
  });


  constructor(private fb: FormBuilder,
    private ciudadService: CiudadService,
    private clubService: ClubService,
    private paisService: PaisService,
    private messageService: MessageService,
    public login: LoginService,
    private mediaService: MediaService,
    private corredorService: CorredorService

  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.selectedCorredor){
      this.modalType="Guardar";
      
      this.corredorForm.patchValue(this.selectedCorredor);
     

      const fecha2= new Date(this.selectedCorredor.fecnac);

      this.corredorForm.controls['fecnac'].setValue(fecha2);
      

    }else{
      this.corredorForm.reset({
        fecnac:this.fechaant,
        nacionalidad:"Paraguaya",
        tipocat:1,
        sexo:1,
        puntua:0,
        fecmodi:this.fecha,
        verificar:2

      });
      this.modalType="Agregar";
    }
  }

  ngOnInit(): void {


    this.tipos = [
      { label: 'PRINCIPAL', value: 1 },
      { label: 'PRINCIPAL-ELITE', value: 2 },
      { label: 'PROMOCIONAL', value: 3 },
      { label: 'PROMOCIONAL+100K', value: 4 }
    ];

    this.grupos = [
      { label: 'RH (O-)', value: 'RH (O-)' },
      { label: 'RH (O+)', value: 'RH (O+)' },
      { label: 'RH (A-)', value: 'RH (A-)' },
      { label: 'RH (A+)', value: 'RH (A+)' },
      { label: 'RH (B-)', value: 'RH (B-)' },
      { label: 'RH (B+)', value: 'RH (B+)' },
      { label: 'RH (AB-)', value: 'RH (AB-)' },
      { label: 'RH (AB+)', value: 'RH (AB+)' }
    ];

    



    this.ciudadService.listarCiudades().subscribe(
      {
        next: (dato: Ciudad[]) => {
          this.ciudades = dato;
       
        },
        error: (error) => {
          console.log(error);
          this.messageService.add({
            severity: "error",
            summary: "Ciudad",
            detail: "Error al cargar la ciudad"
          });
        },
        complete: () => console.info('completo ciudad')
      });

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

    this.user = this.login.getUser();
    this.usuario.idusuario = this.user.idusuario;


    this.paisService.listarPaises().subscribe(
      (dato: any) => {
        this.paises = dato;
       
      }, (error) => {
        console.log(error);
        this.messageService.add({
          severity: "error",
          summary: "Pais",
          detail: "Error al cargar el Pais"
        });
      }
    );

  }
  

  closeModal() {
    this.corredorForm.reset();
    this.clickClose.emit(true);
  }


  addEditCorredor() {


    if (this.currentFile) {
      const formData = new FormData();
      formData.append('file', this.currentFile);

      this.mediaService.uploadFile(formData).subscribe(
        {
          next: response => {
          
            this.url = response.url;
          },
          error: errores => {
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al cargar el archivo', life: 3000 });
            return;
          }
        }

      );


      this.corredorForm.get('foto')?.setValue(this.fileName);

    }
    this.corredorForm.get('usuario')?.setValue(this.usuario);

    if (this.selectedCorredor) {



      this.corredorService.actualizarCorredor(this.corredorForm.value).subscribe(
        {
          next: (dato) => {

            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'La corredor ha sido actualizada con exito', life: 3000 });
            this.closeModal();
          }, error: (error) => {
            console.log(error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la actualizacion de corredor', life: 3000 });

          },
          complete: () => {
            console.log('Completo al actualizar');

          }
        });


    }
    else {

      this.corredorService.agregarCorredor(this.corredorForm.value).subscribe(
        {
          next: (dato) => {

           
           

            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'El corredor ha sido agregada con exito', life: 3000 });

            this.closeModal()
            
          }, error: (error) => {
            console.log(error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la corredor', life: 3000 });

          },
          complete: () => {
            console.log('Completo el agregar');

          }

        }
      )

    }


  }

  selectFile(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      this.currentFile = file;

      this.fileName = this.currentFile.name;
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

  cargarCategoria(cat:Categoria){
    
    this.corredorForm.controls['categoria'].setValue(cat);
    
  }

  
}
