import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { Club } from 'src/app/domain/club';
import { Region } from 'src/app/domain/region';
import { Regional } from 'src/app/domain/regional';

import { ClubService } from 'src/app/service/club.service';
import baserUrl from 'src/app/service/helper';
import { MediaService } from 'src/app/service/media.service';
import { RegionalService } from 'src/app/service/regional.service';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class ClubComponent {

  mediaLocation = `${baserUrl}/media/`;
  

// para agregar
url?: String;
currentFile?: File;
fileName = '';
preview = '';

// para agregar2
url2?: String;
currentFile2?: File;
fileName2 = '';
preview2 = '';


  regionales: Regional[] = [];
  clubes: Club[] = [];

  // para agregar
regio:Regional={
  idregional: 0,
  nomregional: '',
  nomcorto: '',
  logo: '',
  telefono: '',
  direccion: '',
  email: '',
  ano: 0,
  presentacion: ''
};
 region:Region={
   idregion: 0,
   nomregion: '',
   nomcorto: '',
   logo: ''
 }
  club: Club={
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
    regional: this.regio,
    region: this.region
  };


  submitted = false;
  clubDialog = false;

  constructor(private messageService: MessageService, private regionalService: RegionalService, private clubService: ClubService,
    private confirmationService: ConfirmationService,private mediaService: MediaService) { }

  ngOnInit(): void {

    
    this.clubService.listarClubes().subscribe(
      {
        next: (dato: Club[]) => {
          this.clubes = dato;
         
        },
        error: (error) => {
          console.log(error);
          this.messageService.add({
            severity: "error",
            summary: "Club",
            detail: "Error al cargar la club"
          });
        },
        complete: () => console.info('completo club')
      });

      this.regionalService.listarRegionales().subscribe(
        (dato:any) => {
          this.regionales=dato;
      
        },(error) => {
          console.log(error);
          this.messageService.add({
            severity: "error",
            summary: "Regional",
            detail: "Error al cargar el Regional"
          });       
        }
      )
  }

  //para agregar nuevo
  openNew() {
    this.resetClub();
    this.submitted = false;
    this.clubDialog = true;
  }

  private resetClub(){
    this.club = {
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
      regional: this.regio,
      region:this.region
    
      };
  }

  hideDialog() {
    this.clubDialog = false;
    this.submitted = false;
  }

  saveClub() {
    this.submitted = true;
    if (this.club.nomclub.trim() == '' || this.club.nomclub.trim() == null) {

      this.messageService.add({ severity: 'info', summary: 'Advertencia', detail: 'El nomclub es requerido!!', life: 3000 });
      return;
    }

    if(this.currentFile){
      const formData= new FormData();
      formData.append('file',this.currentFile);

      this.mediaService.uploadFile(formData).subscribe(
        { next: response =>{
         
          this.url=response.url;
        },
        error: errores => {
          this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al cargar el archivo', life: 3000 });
          return ;
        }
      }
        
      );
      this.club.ruta=this.fileName;
   
    }

    if(this.currentFile2){
      const formData= new FormData();
      formData.append('file',this.currentFile2);

      this.mediaService.uploadFile(formData).subscribe(
        { next: response =>{
        
          this.url2=response.url2;
        },
        error: errores => {
          this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al cargar el archivo', life: 3000 });
          return ;
        }
      }
        
      );
      this.club.rutagrande=this.fileName2;
   
    }

    if (this.club.idclub) {

      this.clubes[this.findIndexById(this.club.idclub)] = this.club;

      this.clubService.actualizarClub(this.club).subscribe(
        {
          next: (dato) => {

            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'La club ha sido actualizada con exito', life: 3000 });
          }, error: (error) => {
            console.log(error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la actualizacion de club', life: 3000 });

          },
          complete: () => {
            console.log('Completo al actualizar');
          }
        });


    }
    else {


      this.clubes.push(this.club);
      console.log("antes de agregar ");
      

      this.clubService.agregarClub(this.club).subscribe(
        {
          next: (dato) => {

            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'El club ha sido agregada con exito', life: 3000 });
          }, error: (error) => {
            console.log(error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la club', life: 3000 });

          },
          complete: () => {
            console.log('Completo el agregar');
          }

        }
      )


    }

    this.clubes = [...this.clubes];
    this.clubDialog = false;
    
    this.resetClub();

  }

  findIndexById(idclub: number): number {
    let index = -1;
    for (let i = 0; i < this.clubes.length; i++) {
      if (this.clubes[i].idclub === idclub) {
        index = i;
        break;
      }
    }
    console.log('El indice es ' + index + ' de ' + idclub);
    return index;
  }

  editClub(regio: Club) {
    this.club = { ...regio };
    this.clubDialog = true;
  }

  deleteClub(club: Club) {
    this.confirmationService.confirm({
      message: 'Estas seguro de que quieres borrar ' + club.nomclub + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

        this.clubService.eliminarClub(club.idclub).subscribe(
          {
            next: (data) => {

              this.clubes = this.clubes.filter(val => val.idclub !== club.idclub);
              this.resetClub();
              
              this.messageService.add({ severity: 'success', summary: 'Exitosamente', detail: 'Club Borrado', life: 3000 });
            },
            error: (error) => {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar el club', life: 3000 });

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
         
          this.preview = e.target.result;
        };
  
        reader.readAsDataURL(this.currentFile);
      
      //**** */
    } else {
      this.fileName = '';
    }
  }

  selectFile2(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      this.currentFile2 = file;
     
      this.fileName2 = this.currentFile2.name;
      /*** para mostrar antes de enviar y guardar */
      
        this.preview2 = '';
  
        const reader = new FileReader();
  
        reader.onload = (e: any) => {
      
          this.preview2 = e.target.result;
        };
  
        reader.readAsDataURL(this.currentFile2);
      
      //**** */
    } else {
      this.fileName2 = '';
    }
  }



}
