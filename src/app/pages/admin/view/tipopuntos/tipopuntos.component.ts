import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Tipopuntos } from 'src/app/domain/tipopuntos';
import { TipopuntosService } from 'src/app/service/tipopuntos.service';
import baserUrl from 'src/app/service/helper';

@Component({
  selector: 'app-tipopuntos',
  templateUrl: './tipopuntos.component.html',
  styleUrls: ['./tipopuntos.component.css'],
   providers: [MessageService,ConfirmationService]
})
export class TipopuntosComponent  implements OnInit {
  mediaLocation = `${baserUrl}/media/`;
  tipopuntoses: Tipopuntos[] = [];
  selectedTipopuntos:any=null;
  displayAddEditModal=false;

  constructor( private messageService: MessageService,
    private tipopuntosService: TipopuntosService,
    private confirmationService:ConfirmationService
    
    ) { }
  ngOnInit(): void {
    this.rellenarDataTable();
  }

  rellenarDataTable(){
    this.tipopuntosService.listarTipopuntos().subscribe(
      {
        next: (datos: Tipopuntos[]) => {
          this.tipopuntoses = datos;
         
        },
        error: (error) => {
          console.log(error);
          this.messageService.add({
            severity: "error",
            summary: "Tipo",
            detail: "Error al cargar la tipopuntos"
          });
        },
        complete: () => console.info('completo tipopuntos')
      });

  }
  
  showModal(){
    this.selectedTipopuntos=null;
    this.displayAddEditModal=true;

  }

  hideModal(isClosed:boolean){
    this.displayAddEditModal=!isClosed;
  }

  saveTipoToList(newData:Tipopuntos){
    if (this.selectedTipopuntos){
      const tipopuntosIndex = this.tipopuntoses.findIndex(data => data.idtipopuntos=== newData.idtipopuntos);
     
      this.tipopuntoses[tipopuntosIndex]=newData;
    }else{
      this.tipopuntoses.unshift(newData);
    }
    
  }

  editTipo(editData:any){
    this.selectedTipopuntos=editData;
    this.displayAddEditModal=true;
  }

  deleteTipo(deleteData:any){
    this.confirmationService.confirm({
      message: 'Estas seguro de que quieres borrar ' + deleteData.nomtipopuntos + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

        this.tipopuntosService.eliminarTipopuntos(deleteData.idtipopuntos).subscribe(
          {
            next: (data) => {

              this.tipopuntoses = this.tipopuntoses.filter(val => val.idtipopuntos !== deleteData.idtipopuntos);
              
              this.messageService.add({ severity: 'success', summary: 'Exitosamente', detail: 'Tipo Borrado', life: 3000 });
            },
            error: (error) => {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar el tipopuntos', life: 3000 });

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

