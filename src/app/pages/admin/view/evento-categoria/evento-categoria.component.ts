import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { EventoCategoria } from 'src/app/domain/eventoCategoria';
import { EventoCategoriaService } from 'src/app/service/evento-categoria.service';

@Component({
  selector: 'app-evento-categoria',
  templateUrl: './evento-categoria.component.html',
  styleUrls: ['./evento-categoria.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class EventoCategoriaComponent implements OnInit {
  
  eventoCategoriaes: EventoCategoria[] = [];
  selectedEventoCategoria:any=null;
  displayAddEditModal=false;
  entradas:number=0;
  salidas:number=0;

 

  constructor( private messageService: MessageService,
    private eventoCategoriaService: EventoCategoriaService,
    private confirmationService:ConfirmationService
    
    ) { }
  ngOnInit(): void {
    this.rellenarDataTable();
  }

  rellenarDataTable(){
    this.eventoCategoriaService.listarEventoCategoriaes().subscribe(
      {
        next: (datos: EventoCategoria[]) => {
          this.eventoCategoriaes = datos;
          //console.log(datos);
          
         
        },
        error: (error) => {
          console.log(error);
          this.messageService.add({
            severity: "error",
            summary: "EventoCategoria",
            detail: "Error al cargar la eventoCategoria"
          });
        },
        complete: () => console.info('completo eventoCategoria')
      });

  }
  
  showModal(){
    this.selectedEventoCategoria=null;
    this.displayAddEditModal=true;

  }

  hideModal(isClosed:boolean){
    this.displayAddEditModal=!isClosed;
  }

  editEventoCategoria(editData:any){
    this.selectedEventoCategoria=editData;
    this.displayAddEditModal=true;
  }

  saveEventoCategoriaToList(newData:EventoCategoria){   
      this.eventoCategoriaes.unshift(newData);
      this.rellenarDataTable();
  }

  deleteEventoCategoria(deleteData:any){
    this.confirmationService.confirm({
      message: 'Estas seguro de que quieres borrar ' + deleteData.concepto.nomconcepto + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

        this.eventoCategoriaService.eliminarEventoCategoria(deleteData.ideventoCategoria).subscribe(
          {
            next: (data) => {


              //this.eventoCategoriaes = this.eventoCategoriaes.filter(val => val.ideventoCategoria !== deleteData.ideventoCategoria);
              this.rellenarDataTable();
              this.messageService.add({ severity: 'success', summary: 'Exitosamente', detail: 'EventoCategoria Borrado', life: 3000 });
            },
            error: (error) => {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar el eventoCategoria', life: 3000 });

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

