import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { Regional } from 'src/app/domain/regional';
import baserUrl from 'src/app/service/helper';
import { MediaService } from 'src/app/service/media.service';
import { RegionalService } from 'src/app/service/regional.service';

@Component({
  selector: 'app-regional',
  templateUrl: './regional.component.html',
  styleUrls: ['./regional.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class RegionalComponent {

  mediaLocation = `${baserUrl}/media/`;

  regionales: Regional[] = [];

  // para agregar
  url?: String;
  currentFile?: File;
 
  fileName = '';
  preview = '';

  regionalaux: Regional = {
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

  regional: Regional = this.regionalaux;



  submitted = false;
  regionalDialog = false;

  constructor(private messageService: MessageService, private mediaService: MediaService,private regionalService: RegionalService,
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.regionalService.listarRegionales().subscribe(
      {
        next: (dato: Regional[]) => {
          this.regionales = dato;
        },
        error: (error) => {
          console.log(error);
          this.messageService.add({
            severity: "error",
            summary: "Regional",
            detail: "Error al cargar la regional"
          });
        },
        complete: () => console.info('completo')
      });
  }

  //para agregar nuevo
  openNew() {
    this.regional = this.regionalaux
    this.submitted = false;
    this.regionalDialog = true;
  }

  hideDialog() {
    this.regionalDialog = false;
    this.submitted = false;
  }

  saveRegional() {
    this.submitted = true;
    if (this.regional.nomregional.trim() == '' || this.regional.nomregional.trim() == null) {

      this.messageService.add({ severity: 'info', summary: 'Advertencia', detail: 'El nomregional es requerido!!', life: 3000 });
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
      this.regional.logo=this.fileName;
   
    }

    if (this.regional.idregional) {

      this.regionales[this.findIndexById(this.regional.idregional)] = this.regional;
      
      this.regionalService.actualizarRegional(this.regional).subscribe(
        {
          next: (dato) => {

            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'La regional ha sido actualizada con exito', life: 3000 });
          }, error: (error) => {
            console.log(error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la actualizacion de regional', life: 3000 });

          },
          complete: () => {
            console.log('Completo al actualizar');
          }
        });


    }
    else {

      this.regional.logo = 'noimagen.png';
      this.regionales.push(this.regional);

      this.regionalService.agregarRegional(this.regional).subscribe(
        {
          next: (dato) => {

            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'El regional ha sido agregada con exito', life: 3000 });
          }, error: (error) => {
            console.log(error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la regional', life: 3000 });

          },
          complete: () => {
            console.log('Completo el agregar');
          }

        }
      )


    }

    this.regionales = [...this.regionales];
    this.regionalDialog = false;
    this.regional = this.regionalaux

  }

  findIndexById(idregional: number): number {
    let index = -1;
    for (let i = 0; i < this.regionales.length; i++) {
      if (this.regionales[i].idregional === idregional) {
        index = i;
        break;
      }
    }
    console.log('El indice es '+index+' de '+idregional);
    return index;
  }

  editRegional(regio: Regional) {
    this.regional = { ...regio };
    this.regionalDialog = true;
  }

  deleteRegional(regional: Regional) {
    this.confirmationService.confirm({
      message: 'Estas seguro de que quieres borrar ' + regional.nomregional + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

        this.regionalService.eliminarRegional(regional.idregional).subscribe(
          {
            next: (data) => {

              this.regionales = this.regionales.filter(val => val.idregional !== regional.idregional);
              this.regional = this.regionalaux
              this.messageService.add({ severity: 'success', summary: 'Exitosamente', detail: 'Regional Borrado', life: 3000 });
            },
            error: (error) => {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar el regional', life: 3000 });

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
