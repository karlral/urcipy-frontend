import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Puntaje } from 'src/app/domain/puntaje';
import { PuntajeService } from 'src/app/service/puntaje.service';
import baserUrl from 'src/app/service/helper';

@Component({
  selector: 'app-puntaje',
  templateUrl: './puntaje.component.html',
  styleUrls: ['./puntaje.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class PuntajeComponent implements OnInit {
  mediaLocation = `${baserUrl}/media/`;
  puntajees: Puntaje[] = [];
  selectedPuntaje:any=null;
  displayAddEditModal=false;

  constructor( private messageService: MessageService,
    private puntajeService: PuntajeService,
    private confirmationService:ConfirmationService
    
    ) { }
  ngOnInit(): void {
    this.rellenarDataTable();
  }

  rellenarDataTable(){
    this.puntajeService.listarPuntajees().subscribe(
      {
        next: (datos: Puntaje[]) => {
          this.puntajees = datos;
         
        },
        error: (error) => {
          console.log(error);
          this.messageService.add({
            severity: "error",
            summary: "Puntaje",
            detail: "Error al cargar la puntaje"
          });
        },
        complete: () => console.info('completo puntaje')
      });

  }
  
  showModal(){
    this.selectedPuntaje=null;
    this.displayAddEditModal=true;

  }

  hideModal(isClosed:boolean){
    this.displayAddEditModal=!isClosed;
  }

  savePuntajeToList(newData:Puntaje){
    if (this.selectedPuntaje){
      const puntajeIndex = this.puntajees.findIndex(data => data.idpuntaje=== newData.idpuntaje);
     
      this.puntajees[puntajeIndex]=newData;
    }else{
      this.puntajees.unshift(newData);
    }
    
  }

  editPuntaje(editData:any){
    this.selectedPuntaje=editData;
    this.displayAddEditModal=true;
  }

  deletePuntaje(deleteData:any){
    this.confirmationService.confirm({
      message: 'Estas seguro de que quieres borrar ' + deleteData.nombre + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

        this.puntajeService.eliminarPuntaje(deleteData.idpuntaje).subscribe(
          {
            next: (data) => {

              this.puntajees = this.puntajees.filter(val => val.idpuntaje !== deleteData.idpuntaje);
              
              this.messageService.add({ severity: 'success', summary: 'Exitosamente', detail: 'Puntaje Borrado', life: 3000 });
            },
            error: (error) => {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar el puntaje', life: 3000 });

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

