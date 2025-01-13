import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { Region } from 'src/app/domain/region';
import baserUrl from 'src/app/service/helper';
import { MediaService } from 'src/app/service/media.service';
import { RegionService } from 'src/app/service/region.service';


@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class RegionComponent {

  mediaLocation = `${baserUrl}/media/`;

  regiones: Region[] = [];

  // para agregar
  url?: String;
  currentFile?: File;
 
  fileName = '';
  preview = '';

  region: Region = {
    idregion: 0,
    nomregion: '',
    nomcorto: '',
    logo: ''
  };


  submitted = false;
  regionDialog = false;

  constructor(private messageService: MessageService, private mediaService: MediaService,private regionService: RegionService,
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.regionService.listarRegiones().subscribe(
      {
        next: (dato: Region[]) => {
          this.regiones = dato;
        },
        error: (error) => {
          console.log(error);
          this.messageService.add({
            severity: "error",
            summary: "Region",
            detail: "Error al cargar la region"
          });
        },
        complete: () => console.info('completo')
      });
  }

  //para agregar nuevo
  openNew() {
    this.region = {
      idregion: 0,
      nomregion: "",
      nomcorto: "",
      logo: ""
    }
    this.submitted = false;
    this.regionDialog = true;
  }

  hideDialog() {
    this.regionDialog = false;
    this.submitted = false;
  }

  saveRegion() {
    this.submitted = true;
    if (this.region.nomregion.trim() == '' || this.region.nomregion.trim() == null) {

      this.messageService.add({ severity: 'info', summary: 'Advertencia', detail: 'El nomregion es requerido!!', life: 3000 });
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
      this.region.logo=this.fileName;
   
    }

    if (this.region.idregion) {

      this.regiones[this.findIndexById(this.region.idregion)] = this.region;
      
      this.regionService.actualizarRegion(this.region).subscribe(
        {
          next: (dato) => {

            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'La region ha sido actualizada con exito', life: 3000 });
          }, error: (error) => {
            console.log(error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la actualizacion de region', life: 3000 });

          },
          complete: () => {
            console.log('Completo al actualizar');
          }
        });


    }
    else {

      this.region.logo = 'noimagen.png';
      this.regiones.push(this.region);

      this.regionService.agregarRegion(this.region).subscribe(
        {
          next: (dato) => {

            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'El region ha sido agregada con exito', life: 3000 });
          }, error: (error) => {
            console.log(error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la region', life: 3000 });

          },
          complete: () => {
            console.log('Completo el agregar');
          }

        }
      )


    }

    this.regiones = [...this.regiones];
    this.regionDialog = false;
    this.region = {
      idregion: 0,
      nomregion: "",
      nomcorto: "",
      logo: ""
    }

  }

  findIndexById(idregion: number): number {
    let index = -1;
    for (let i = 0; i < this.regiones.length; i++) {
      if (this.regiones[i].idregion === idregion) {
        index = i;
        break;
      }
    }
    console.log('El indice es '+index+' de '+idregion);
    return index;
  }

  editRegion(regio: Region) {
    this.region = { ...regio };
    this.regionDialog = true;
  }

  deleteRegion(region: Region) {
    this.confirmationService.confirm({
      message: 'Estas seguro de que quieres borrar ' + region.nomregion + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

        this.regionService.eliminarRegion(region.idregion).subscribe(
          {
            next: (data) => {

              this.regiones = this.regiones.filter(val => val.idregion !== region.idregion);
              this.region = {
                idregion: 0,
                nomregion: "",
                nomcorto: "",
                logo: ""
              }
              this.messageService.add({ severity: 'success', summary: 'Exitosamente', detail: 'Region Borrado', life: 3000 });
            },
            error: (error) => {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar el region', life: 3000 });

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

}
