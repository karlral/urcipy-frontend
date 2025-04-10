import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Categoria } from 'src/app/domain/categoria';
import { Ciudad } from 'src/app/domain/ciudad';
import { Club } from 'src/app/domain/club';
import { Corredor } from 'src/app/domain/corredor';
import { Modalidad } from 'src/app/domain/modalidad';
import { Pais } from 'src/app/domain/pais';
import { Persona } from 'src/app/domain/persona';
import { Region } from 'src/app/domain/region';
import { Regional } from 'src/app/domain/regional';
import { Trayecto } from 'src/app/domain/trayecto';
import { Usuario } from 'src/app/domain/usuario';
import { CiudadService } from 'src/app/service/ciudad.service';
import { ClubService } from 'src/app/service/club.service';
import { CorredorService } from 'src/app/service/corredor.service';
import baserUrl from 'src/app/service/helper';
import system from 'src/app/service/helpersys';
import { LoginService } from 'src/app/service/login.service';
import { MediaService } from 'src/app/service/media.service';
import { PaisService } from 'src/app/service/pais.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-add-edit-corredor',
  templateUrl: './add-edit-corredor.component.html',
  styleUrls: ['./add-edit-corredor.component.css']
})
export class AddEditCorredorComponent implements OnInit, OnChanges {
  @Input() displayAddEditModal: boolean = true;
  @Input() selectedCorredor:any=null;

  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clickAddEdit: EventEmitter<any> = new EventEmitter<any>();

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
modalidad:Modalidad={
  idmodalidad: 0,
  nommodalidad: ''
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
    trayecto: this.trayecto,
    horario: '',
    modalidad: this.modalidad,
    codigo: '',
    nomalternativo: ''
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
  region: Region = {
    idregion: 1,
    nomregion: '',
    nomcorto: '',
    logo: ''
  }
  regional: Regional = {
    idregional: system,
    nomregional: '',
    nomcorto: '',
    telefono: '',
    direccion: '',
    email: '',
    ano: 0,
    presentacion: '',
    logo: ''
  }
  club: Club = {
    idclub: 1,
    nomclub: 'Libre',
    presidente: '',
    telepresi: '',
    vicepresidente: '',
    telvice: '',
    telefono: '',
    email: '',
    ruta: '',
    rutagrande: '',
    region: this.region,
    modalidad: this.modalidad
  }
  pais: Pais = {
    idpais: 1,
    nompais: '',
    nacionalidad: ''
  }
  ciudad: Ciudad = {
    idciudad: 1,
    nomciudad: '',
    pais: this.pais
  }

  corredorForm = this.fb.group({
    idcorredor:[null],
    persona: this.fb.group({
      idpersona: [null],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      ci: ['', Validators.required],
      sexo: [1, Validators.required],
      fecnac: [this.fechaant, Validators.required],
      telefono: ['', Validators.required],
      direccion: [''],
      email: [''],
      foto: [''],
      cidelante: [''],
      gruposanguineo: [''],
      tutorp: [''],
      citp: [''],
      nacionalidad: ['Paraguaya', Validators.required],
      ciudad: this.ciudad,
    }),
    
    verificar: [0],
    carnet: [''],
    carnetatras: [''],
    tipocat: [2, Validators.required],
    licencia: [0],
    modificar: [false],
    puntua: [0],
    fecmodi: [this.fecha],
    montopuntua: [0],
    carnetfpc: [3],
    observacion: [''],
    club: [this.club],
    categoria: [this.eCategoria],
    usuario: [this.usuario],
    regional: [this.regional],
    catalianza: [false],
    idmodalidad: [1],
    
  });

  personabus: any =null;
  persona: Persona = {
    idpersona: 0,
    nombre: '',
    apellido: '',
    ci: '',
    sexo: 0,
    fecnac: new Date,
    telefono: '',
    direccion: '',
    email: '',
    foto: '',
    cidelante: '',
    gruposanguineo: '',
    tutorp: '',
    citp: '',
    nacionalidad: '',
    ciudad: this.ciudad,
    tamano: 0
  }
  

  corredor: Corredor = {
    idcorredor: 0,
    persona: this.persona,
    club: this.club,
    categoria: this.eCategoria,
    usuario: this.usuario,
    regional: this.regional,
    verificar: 0,
    carnet: '',
    carnetatras: '',
    tipocat: 0,
    licencia: 0,
    modificar: false,
    gruposanguineo: '',
    puntua: 0,
    fecmodi: new Date(),
    montopuntua: 0,
    carnetfpc: 0,
    observacion: '',
    catalianza: true
  };

 idmodalidad=1;

  constructor(private fb: FormBuilder,
    private ciudadService: CiudadService,
    private clubService: ClubService,
    private paisService: PaisService,
    private messageService: MessageService,
    public login: LoginService,
    private mediaService: MediaService,
    private corredorService: CorredorService,
    private personaService:PersonaService
    
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.selectedCorredor){
      this.modalType="Guardar";
      
      this.corredorForm.patchValue(this.selectedCorredor);
     // console.log(this.selectedCorredor);
  
     const localtime = new Date(this.selectedCorredor.persona.fecnac);
      const fecnac = new Date(localtime.getTime() + localtime.getTimezoneOffset() * 60000);

     // const fecha2= new Date(this.selectedEvento.fecha);
      //const fecnac= new Date(this.selectedCorredor.persona.fecnac);
     
      this.corredorForm.controls['persona'].controls['fecnac'].setValue(fecnac);

    }else{
      
      this.corredorForm.reset({
        persona:{
          fecnac:this.fechaant,
          nacionalidad:"Paraguaya",
          sexo:1,
          ciudad:this.ciudad,
          
        },
        tipocat:3,
        puntua:0,
        fecmodi:this.fecha,
        verificar:0,
        club:this.club,
        usuario:this.usuario,
        regional:this.regional,
        carnetfpc: 2,
        categoria:this.eCategoria,
        catalianza:true

      });
      this.modalType="Agregar";
      //this.corredorForm.controls['categoria'].setValue(this.eCategoria);
      this.cargarCategoria(this.eCategoria);
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

  mostrarVarCorredor() {
    
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

      this.corredorForm.get('persona')?.get('foto')?.setValue(this.fileName);
      //this.corredorForm.get('foto')?.setValue(this.fileName);

    }
    this.corredorForm.get('usuario')?.setValue(this.usuario);
    this.corredorForm.get('regional')?.setValue(this.regional);

    this.corredorForm.get('fecmodi')?.setValue(this.fecha);
   // console.log(this.corredorForm.value);

    if (this.selectedCorredor) {


      this.corredorService.actualizarCorredor(this.corredorForm.value).subscribe(
        {
          next: (dato) => {

            this.clickAddEdit.emit(dato);
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

           const clubControl = this.corredorForm.get('club');
           if (clubControl && clubControl.value) {
             this.club = clubControl.value;
           }
           
          // this.savePersona();

            this.clickAddEdit.emit(dato);

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

  focusOutFunction(){
    if (this.modalType==="Agregar"){
      
      
      const ci= this.corredorForm.get('persona')?.get('ci')?.value;
      
      this.personaService.obtenerPersonaCi(ci).subscribe({
        next: (dato) => {
          
          if (dato){
            this.corredorForm.controls['persona'].patchValue(dato);   
            this.personabus=dato;
            const fecnac= new Date(this.personabus.fecnac);
            this.corredorForm.controls['persona'].get('fecnac')?.setValue(fecnac);
            //this.corredorForm.controls['persona'].controls['fecnac'].setValue(fecnac);
          }
          

        
        }, error: (error) => {
          console.log(error);
          this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al Persona del corredor', life: 3000 });

        },
        complete: () => {
          console.log('Completo el busqueda de Persona');

        }
      });
      
    }
  }
  

}
