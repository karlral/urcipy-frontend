import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Evento } from 'src/app/domain/evento';
import { EventoService } from 'src/app/service/evento.service';
import baserUrl from 'src/app/service/helper';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class EventoComponent implements OnInit {
  mediaLocation = `${baserUrl}/media/`;
  eventoes: Evento[] = [];
  selectedEvento:any=null;
  displayAddEditModal=false;

  constructor( private messageService: MessageService,
    private eventoService: EventoService,
    private confirmationService:ConfirmationService
    
    ) { }
  ngOnInit(): void {
    this.rellenarDataTable();
  }

  rellenarDataTable(){
    this.eventoService.listarEventoes().subscribe(
      {
        next: (datos: Evento[]) => {
          this.eventoes = datos;
          //console.log(this.eventoes);
        },
        error: (error) => {
          console.log(error);
          this.messageService.add({
            severity: "error",
            summary: "Evento",
            detail: "Error al cargar la evento"
          });
        },
        complete: () => console.info('completo evento')
      });

  }
  
  showModal(){
    this.selectedEvento=null;
    this.displayAddEditModal=true;

  }

  hideModal(isClosed:boolean){
    this.displayAddEditModal=!isClosed;
  }

  saveEventoToList(newData:Evento){
    if (this.selectedEvento){
      const eventoIndex = this.eventoes.findIndex(data => data.idevento=== newData.idevento);
      console.log(newData);
      console.log(eventoIndex);
      this.eventoes[eventoIndex]=newData;
    }else{
      this.eventoes.unshift(newData);
    }
    
  }

  editEvento(editData:any){
    this.selectedEvento=editData;
    this.displayAddEditModal=true;
  }

  deleteEvento(deleteData:any){
    this.confirmationService.confirm({
      message: 'Estas seguro de que quieres borrar ' + deleteData.nombre + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

        this.eventoService.eliminarEvento(deleteData.idevento).subscribe(
          {
            next: (data) => {

              this.eventoes = this.eventoes.filter(val => val.idevento !== deleteData.idevento);
              
              this.messageService.add({ severity: 'success', summary: 'Exitosamente', detail: 'Evento Borrado', life: 3000 });
            },
            error: (error) => {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar el evento', life: 3000 });

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

