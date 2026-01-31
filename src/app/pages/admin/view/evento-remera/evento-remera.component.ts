import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { EventoRemera } from 'src/app/domain/eventoRemera';
import { EventoRemeraService } from 'src/app/service/evento-remera.service';
@Component({
  selector: 'app-evento-remera',
  templateUrl: './evento-remera.component.html',
  styleUrls: ['./evento-remera.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class EventoRemeraComponent implements OnInit {
  
  eventoRemeraes: EventoRemera[] = [];
  selectedEventoRemera:any=null;
  displayAddEditModal=false;
  entradas:number=0;
  salidas:number=0;

 

  constructor( private messageService: MessageService,
    private eventoRemeraService: EventoRemeraService,
    private confirmationService:ConfirmationService
    
    ) { }
  ngOnInit(): void {
    this.rellenarDataTable();
  }

  rellenarDataTable(){
    this.eventoRemeraService.listarEventoRemeraes().subscribe(
      {
        next: (datos: EventoRemera[]) => {
          this.eventoRemeraes = datos;
          //console.log(datos);
          
         
        },
        error: (error) => {
          console.log(error);
          this.messageService.add({
            severity: "error",
            summary: "EventoRemera",
            detail: "Error al cargar la eventoRemera"
          });
        },
        complete: () => console.info('completo eventoRemera')
      });

  }
  
  showModal(){
    this.selectedEventoRemera=null;
    this.displayAddEditModal=true;

  }

  hideModal(isClosed:boolean){
    this.displayAddEditModal=!isClosed;
  }

  editEventoRemera(editData:any){
    this.selectedEventoRemera=editData;
    this.displayAddEditModal=true;
  }

  saveEventoRemeraToList(newData:EventoRemera){   
      this.eventoRemeraes.unshift(newData);
      this.rellenarDataTable();
  }

  deleteEventoRemera(deleteData:any){
    this.confirmationService.confirm({
      message: 'Estas seguro de que quieres borrar ' + deleteData.remera.nomremera + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

        this.eventoRemeraService.eliminarEventoRemera(deleteData.ideventoRemera).subscribe(
          {
            next: (data) => {


              //this.eventoRemeraes = this.eventoRemeraes.filter(val => val.ideventoRemera !== deleteData.ideventoRemera);
              this.rellenarDataTable();
              this.messageService.add({ severity: 'success', summary: 'Exitosamente', detail: 'EventoRemera Borrado', life: 3000 });
            },
            error: (error) => {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar el eventoRemera', life: 3000 });

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

