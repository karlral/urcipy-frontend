import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { EventoTipo } from 'src/app/domain/eventoTipo';
import { EventoTipoService } from 'src/app/service/evento-tipo.service';


@Component({
  selector: 'app-evento-tipo',
  templateUrl: './evento-tipo.component.html',
  styleUrls: ['./evento-tipo.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class EventoTipoComponent implements OnInit {
  
  eventoTipoes: EventoTipo[] = [];
  selectedEventoTipo:any=null;
  displayAddEditModal=false;
  entradas:number=0;
  salidas:number=0;

 

  constructor( private messageService: MessageService,
    private eventoTipoService: EventoTipoService,
    private confirmationService:ConfirmationService
    
    ) { }
  ngOnInit(): void {
    this.rellenarDataTable();
  }

  rellenarDataTable(){
    this.eventoTipoService.listarEventoTipoes().subscribe(
      {
        next: (datos: EventoTipo[]) => {
          this.eventoTipoes = datos;
          //console.log(datos);
          
         
        },
        error: (error) => {
          console.log(error);
          this.messageService.add({
            severity: "error",
            summary: "EventoTipo",
            detail: "Error al cargar la eventoTipo"
          });
        },
        complete: () => console.info('completo eventoTipo')
      });

  }
  
  showModal(){
    this.selectedEventoTipo=null;
    this.displayAddEditModal=true;

  }

  hideModal(isClosed:boolean){
    this.displayAddEditModal=!isClosed;
  }

  editEventoTipo(editData:any){
    this.selectedEventoTipo=editData;
    this.displayAddEditModal=true;
  }

  saveEventoTipoToList(newData:EventoTipo){   
      this.eventoTipoes.unshift(newData);
      this.rellenarDataTable();
  }

  deleteEventoTipo(deleteData:any){
    this.confirmationService.confirm({
      message: 'Estas seguro de que quieres borrar ' + deleteData.concepto.nomconcepto + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

        this.eventoTipoService.eliminarEventoTipo(deleteData.ideventoTipo).subscribe(
          {
            next: (data) => {


              //this.eventoTipoes = this.eventoTipoes.filter(val => val.ideventoTipo !== deleteData.ideventoTipo);
              this.rellenarDataTable();
              this.messageService.add({ severity: 'success', summary: 'Exitosamente', detail: 'EventoTipo Borrado', life: 3000 });
            },
            error: (error) => {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar el eventoTipo', life: 3000 });

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

