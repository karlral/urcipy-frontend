import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { Corredor } from 'src/app/domain/corredor';
import { Club } from 'src/app/domain/club';

import { CorredorService } from 'src/app/service/corredor.service';
import { ClubService } from 'src/app/service/club.service';
import { Regional } from 'src/app/domain/regional';
import { Categoria } from 'src/app/domain/categoria';
import { Ciudad } from 'src/app/domain/ciudad';
import { Pais } from 'src/app/domain/pais';
import { Usuario } from 'src/app/domain/usuario';
import { CategoriaService } from 'src/app/service/categoria.service';
import { CiudadService } from 'src/app/service/ciudad.service';
import { LoginService } from 'src/app/service/login.service';
import { PaisService } from 'src/app/service/pais.service';
import { MediaService } from 'src/app/service/media.service';
import baserUrl from 'src/app/service/helper';

@Component({
  selector: 'app-corredor_back',
  templateUrl: './corredor_back.component.html',
  styleUrls: ['./corredor_back.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class Corredor_backComponent {

  corredores: Corredor[] = [];
  clubes: Club[] = [];
  categorias: Categoria[] = [];
  ciudades: Ciudad[] = [];
  paises: Pais[] = [];

  user:any;
  
// para agregar
mediaLocation = `${baserUrl}/media/`;
url?: String;
currentFile?: File;
fileName = '';
preview = '';

  regional:Regional ={
    idregional: 0,
    nomregional: '',
    nomcorto: '',
    logo: ''
  };
  
club:Club={
  idclub: 0,
  nomclub: '',
  presidente: '',
  telepresi: '',
  vicepresidente: '',
  telvice: '',
  telefono: '',
  email: '',
  ruta: '',
  rutagrande: '',
  regional: this.regional
};
usuario:Usuario={
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
categoria:Categoria={
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
  tipo: 0
}
 
fecha = new Date();

pais:Pais={
  idpais: 0,
  nompais: '',
  nacionalidad: ''
};
ciudad:Ciudad={
  idciudad: 0,
  nomciudad: '',
  pais: this.pais
};
  corredor: Corredor = {
    idcorredor: 0,
    nombre: '',
    apellido: '',
    ci: '',
    sexo: 0,
    fecnac: this.fecha,
    telefono: '',
    direccion: '',
    email: '',
    verificar: 0,
    nacionalidad: '',
    carnet: '',
    carnetatras: '',
    foto: '',
    cidelante: '',
    tipocat: 0,
    tutorp: '',
    citp: '',
    licencia: 0,
    modificar: false,
    gruposanguineo: '',
    puntua: false,
    fecmodi: this.fecha,
    montopuntua: 0,
    carnetfpc: false,
    observacion: '',
    club: this.club,
    categoria: this.categoria,
    ciudad: this.ciudad,
    usuario: this.usuario
  };

  tipos: any[] = [];
  grupos: any[] = [];

  submitted = false;
  corredorDialog = false;

  constructor(private messageService: MessageService, 
    private corredorService: CorredorService,
    private categoriaService: CategoriaService,
    private ciudadService: CiudadService,
    private clubService: ClubService,
    public login:LoginService,
    private paisService: PaisService,
    private confirmationService: ConfirmationService,
    private mediaService: MediaService
    ) { }

  ngOnInit(): void {
    
    

    this.tipos = [
        {label: 'PRINCIPAL', value: 1},
        {label: 'PRINCIPAL-ELITE', value: 2},
        {label: 'PROMOCIONAL', value: 3},
        {label: 'PROMOCIONAL+100K', value: 4}
    ];

    this.grupos = [
      {label: 'RH (O-)', value:'RH (O-)'},
      {label: 'RH (O+)', value: 'RH (O+)'},
      {label: 'RH (A-)', value: 'RH (A-)'},
      {label: 'RH (A+)', value: 'RH (A+)'},
      {label: 'RH (B-)', value: 'RH (B-)'},
      {label: 'RH (B+)', value: 'RH (B+)'},
      {label: 'RH (AB-)', value: 'RH (AB-)'},
      {label: 'RH (AB+)', value: 'RH (AB+)'}
  ];

    this.categoriaService.listarCategoriaes().subscribe(
      {
        next: (dato: Categoria[]) => {
          this.categorias = dato;
         // console.log(this.categorias);
        },
        error: (error) => {
          console.log(error);
          this.messageService.add({
            severity: "error",
            summary: "Categoria",
            detail: "Error al cargar la categoria"
          });
        },
        complete: () => console.info('completo carga de categorias')
      });

      this.ciudadService.listarCiudades().subscribe(
        {
          next: (dato: Ciudad[]) => {
            this.ciudades = dato;
          //  console.log(this.ciudades);
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
        (dato:any) => {
          this.clubes=dato;
         // console.log(this.clubes);
        },(error) => {
          console.log(error);
          this.messageService.add({
            severity: "error",
            summary: "Club",
            detail: "Error al cargar el Club"
          });       
        }
      );

      this.user=this.login.getUser();
      this.usuario.idusuario=this.user.idusuario;
      

      this.paisService.listarPaises().subscribe(
        (dato:any) => {
          this.paises=dato;
        //  console.log(this.paises);
        },(error) => {
          console.log(error);
          this.messageService.add({
            severity: "error",
            summary: "Pais",
            detail: "Error al cargar el Pais"
          });       
        }
      );

      this.rellenarDataTable();
  }

  rellenarDataTable(){
    this.corredorService.listarCorredores().subscribe(
      {
        next: (dato: Corredor[]) => {
          this.corredores = dato;
          console.log(this.corredores);
        },
        error: (error) => {
          console.log(error);
          this.messageService.add({
            severity: "error",
            summary: "Corredor",
            detail: "Error al cargar la corredor"
          });
        },
        complete: () => console.info('completo corredor')
      });

  }
  private resetCorredor():Corredor{
    var valor: Corredor = {
      idcorredor: 0,
      nombre: '',
      apellido: '',
      ci: '',
      sexo: 0,
      fecnac: this.fecha,
      telefono: '',
      direccion: '',
      email: '',
      verificar: 0,
      nacionalidad: '',
      carnet: '',
      carnetatras: '',
      foto: '',
      cidelante: '',
      tipocat: 0,
      tutorp: '',
      citp: '',
      licencia: 0,
      modificar: false,
      gruposanguineo: '',
      puntua: false,
      fecmodi: this.fecha,
      montopuntua: 0,
      carnetfpc: false,
      observacion: '',
      club: this.club,
      categoria: this.categoria,
      ciudad: this.ciudad,
      usuario: this.usuario
    };
    return valor;
  }
  //para agregar nuevo
  openNew() {
    this.corredor  = this.resetCorredor();
    console.log(this.corredor);
    this.submitted = false;
    this.corredorDialog = true;
  }

  hideDialog() {
    this.corredorDialog = false;
    this.submitted = false;
  }

  saveCorredor() {
    this.submitted = true;
    if (this.corredor.nombre.trim() == '' || this.corredor.nombre.trim() == null) {

      this.messageService.add({ severity: 'info', summary: 'Advertencia', detail: 'El nomcorredor es requerido!!', life: 3000 });
      return;
    }

    if(this.currentFile){
      const formData= new FormData();
      formData.append('file',this.currentFile);

      this.mediaService.uploadFile(formData).subscribe(
        { next: response =>{
          console.log('response',response);
          this.url=response.url;
        },
        error: errores => {
          this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al cargar el archivo', life: 3000 });
          return ;
        }
      }
        
      );
      this.corredor.foto=this.fileName;
   
    }

    this.corredor.usuario=this.usuario;
    this.corredor.fecmodi=this.fecha;

    if (this.corredor.idcorredor) {


      this.corredorService.actualizarCorredor(this.corredor).subscribe(
        {
          next: (dato) => {

            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'La corredor ha sido actualizada con exito', life: 3000 });
          }, error: (error) => {
            console.log(error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la actualizacion de corredor', life: 3000 });

          },
          complete: () => {
            console.log('Completo al actualizar');
            this.rellenarDataTable();
          }
        });


    }
    else {


      console.log("antes de agregar ");
      console.log(this.corredor);

      this.corredorService.agregarCorredor(this.corredor).subscribe(
        {
          next: (dato) => {

            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'El corredor ha sido agregada con exito', life: 3000 });
          }, error: (error) => {
            console.log(error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la corredor', life: 3000 });

          },
          complete: () => {
            console.log('Completo el agregar');
            this.rellenarDataTable();
          }

        }
      )


    }

    
    this.corredorDialog = false;
    this.corredor  = this.resetCorredor();

  }



  editCorredor(valor: Corredor) {
    this.corredor = valor;
    var fecnac = new Date(valor.fecnac);
    var fecmodi= new Date(valor.fecmodi);
    this.corredor.fecnac=fecnac;
    this.corredor.fecmodi=fecmodi;

    this.corredorDialog = true;
  }

  deleteCorredor(corredor: Corredor) {
    this.confirmationService.confirm({
      message: 'Estas seguro de que quieres borrar ' + corredor.nombre + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

        this.corredorService.eliminarCorredor(corredor.idcorredor).subscribe(
          {
            next: (data) => {

              this.corredores = this.corredores.filter(val => val.idcorredor !== corredor.idcorredor);
              this.corredor  = this.resetCorredor();
              this.messageService.add({ severity: 'success', summary: 'Exitosamente', detail: 'Corredor Borrado', life: 3000 });
            },
            error: (error) => {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar el corredor', life: 3000 });

            },
            complete: () => {
              console.log('Completado');
            }
          }
        );


      }
    });
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
          console.log(e.target.result);
          this.preview = e.target.result;
        };
  
        reader.readAsDataURL(this.currentFile);
      
      //**** */
    } else {
      this.fileName = '';
    }
  }

}
