import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Tipo } from 'src/app/domain/tipo';
import { TipoService } from 'src/app/service/tipo.service';
import baserUrl from 'src/app/service/helper';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class TipoComponent implements OnInit {
  mediaLocation = `${baserUrl}/media/`;
  tipoes: Tipo[] = [];
  selectedTipo:any=null;
  displayAddEditModal=false;

  constructor( private messageService: MessageService,
    private tipoService: TipoService,
    private confirmationService:ConfirmationService
    
    ) { }
  ngOnInit(): void {
    this.rellenarDataTable();
  }

  rellenarDataTable(){
    this.tipoService.listarTipoes().subscribe(
      {
        next: (datos: Tipo[]) => {
          this.tipoes = datos;
         
        },
        error: (error) => {
          console.log(error);
          this.messageService.add({
            severity: "error",
            summary: "Tipo",
            detail: "Error al cargar la tipo"
          });
        },
        complete: () => console.info('completo tipo')
      });

  }
  
  showModal(){
    this.selectedTipo=null;
    this.displayAddEditModal=true;

  }

  hideModal(isClosed:boolean){
    this.displayAddEditModal=!isClosed;
  }

  saveTipoToList(newData:Tipo){
    if (this.selectedTipo){
      const tipoIndex = this.tipoes.findIndex(data => data.idtipo=== newData.idtipo);
     
      this.tipoes[tipoIndex]=newData;
    }else{
      this.tipoes.unshift(newData);
    }
    
  }

  editTipo(editData:any){
    this.selectedTipo=editData;
    this.displayAddEditModal=true;
  }

  deleteTipo(deleteData:any){
    this.confirmationService.confirm({
      message: 'Estas seguro de que quieres borrar ' + deleteData.nomtipo + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

        this.tipoService.eliminarTipo(deleteData.idtipo).subscribe(
          {
            next: (data) => {

              this.tipoes = this.tipoes.filter(val => val.idtipo !== deleteData.idtipo);
              
              this.messageService.add({ severity: 'success', summary: 'Exitosamente', detail: 'Tipo Borrado', life: 3000 });
            },
            error: (error) => {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar el tipo', life: 3000 });

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

