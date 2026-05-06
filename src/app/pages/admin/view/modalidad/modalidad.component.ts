import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Modalidad } from 'src/app/domain/modalidad';
import { ModalidadService } from 'src/app/service/modalidad.service';
import baserUrl from 'src/app/service/helper';

@Component({
  selector: 'app-modalidad',
  templateUrl: './modalidad.component.html',
  styleUrls: ['./modalidad.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class ModalidadComponent  implements OnInit {
  mediaLocation = `${baserUrl}/media/`;
  modalidades: Modalidad[] = [];
  selectedModalidad:any=null;
  displayAddEditModal=false;

  constructor( private messageService: MessageService,
    private modalidadService: ModalidadService,
    private confirmationService:ConfirmationService
    
    ) { }
  ngOnInit(): void {
    this.rellenarDataTable();
  }

  rellenarDataTable(){
    this.modalidadService.listarModalidades().subscribe(
      {
        next: (datos: Modalidad[]) => {
          this.modalidades = datos;
         
        },
        error: (error) => {
          console.log(error);
          this.messageService.add({
            severity: "error",
            summary: "Modalidad",
            detail: "Error al cargar la modalidad"
          });
        },
        complete: () => console.info('completo modalidad')
      });

  }
  
  showModal(){
    this.selectedModalidad=null;
    this.displayAddEditModal=true;

  }

  hideModal(isClosed:boolean){
    this.displayAddEditModal=!isClosed;
  }

  saveModalidadToList(newData:Modalidad){
    if (this.selectedModalidad){
      const modalidadIndex = this.modalidades.findIndex(data => data.idmodalidad=== newData.idmodalidad);
     
      this.modalidades[modalidadIndex]=newData;
    }else{
      this.modalidades.unshift(newData);
    }
    
  }

  editModalidad(editData:any){
    this.selectedModalidad=editData;
    this.displayAddEditModal=true;
  }

  deleteModalidad(deleteData:any){
    this.confirmationService.confirm({
      message: 'Estas seguro de que quieres borrar ' + deleteData.nommodalidad + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

        this.modalidadService.eliminarModalidad(deleteData.idmodalidad).subscribe(
          {
            next: (data) => {

              this.modalidades = this.modalidades.filter(val => val.idmodalidad !== deleteData.idmodalidad);
              
              this.messageService.add({ severity: 'success', summary: 'Exitosamente', detail: 'Modalidad Borrado', life: 3000 });
            },
            error: (error) => {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar el modalidad', life: 3000 });

            },
            complete: () => {
              console.log('Completado');
            }
          }
        );


      }
    });
    
  }

}

