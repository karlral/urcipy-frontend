import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { EventoAsignacion } from 'src/app/domain/eventoAsignacion';
import { EventoAsignacionService } from 'src/app/service/evento-asignacion.service';

@Component({
  selector: 'app-evento-asignacion',
  templateUrl: './evento-asignacion.component.html',
  styleUrls: ['./evento-asignacion.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class EventoAsignacionComponent implements OnInit {
  
  eventoAsignaciones: EventoAsignacion[] = [];
  selectedEventoAsignacion:any=null;
  displayAddEditModal=false;
  entradas:number=0;
  salidas:number=0;

 

  constructor( private messageService: MessageService,
    private eventoAsignacionService: EventoAsignacionService,
    private confirmationService:ConfirmationService
    
    ) { }
  ngOnInit(): void {
    this.rellenarDataTable();
  }

  rellenarDataTable(){
    this.eventoAsignacionService.listarEventoAsignaciones().subscribe(
      {
        next: (datos: EventoAsignacion[]) => {
          this.eventoAsignaciones = datos;
          //console.log(datos);
          
         
        },
        error: (error) => {
          console.log(error);
          this.messageService.add({
            severity: "error",
            summary: "EventoAsignacion",
            detail: "Error al cargar la eventoAsignacion"
          });
        },
        complete: () => console.info('completo eventoAsignacion')
      });

  }
  
  showModal(){
    this.selectedEventoAsignacion=null;
    this.displayAddEditModal=true;

  }

  hideModal(isClosed:boolean){
    this.displayAddEditModal=!isClosed;
  }

  editEventoAsignacion(editData:any){
    this.selectedEventoAsignacion=editData;
    this.displayAddEditModal=true;
  }

  saveEventoAsignacionToList(newData:EventoAsignacion){   
      this.eventoAsignaciones.unshift(newData);
      this.rellenarDataTable();
  }

  deleteEventoAsignacion(deleteData:any){
    this.confirmationService.confirm({
      message: 'Estas seguro de que quieres borrar ' + deleteData.concepto.nomconcepto + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

        this.eventoAsignacionService.eliminarEventoAsignacion(deleteData.ideventoAsignacion).subscribe(
          {
            next: (data) => {


              //this.eventoAsignaciones = this.eventoAsignaciones.filter(val => val.ideventoAsignacion !== deleteData.ideventoAsignacion);
              this.rellenarDataTable();
              this.messageService.add({ severity: 'success', summary: 'Exitosamente', detail: 'EventoAsignacion Borrado', life: 3000 });
            },
            error: (error) => {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar el eventoAsignacion', life: 3000 });

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


