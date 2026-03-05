import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Remera } from 'src/app/domain/remera';
import { RemeraService } from 'src/app/service/remera.service';
import baserUrl from 'src/app/service/helper';

@Component({
  selector: 'app-remera',
  templateUrl: './remera.component.html',
  styleUrls: ['./remera.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class RemeraComponent implements OnInit {
  mediaLocation = `${baserUrl}/media/`;
  remeraes: Remera[] = [];
  selectedRemera:any=null;
  displayAddEditModal=false;

  constructor( private messageService: MessageService,
    private remeraService: RemeraService,
    private confirmationService:ConfirmationService
    
    ) { }
  ngOnInit(): void {
    this.rellenarDataTable();
  }

  rellenarDataTable(){
    this.remeraService.listarRemeraes().subscribe(
      {
        next: (datos: Remera[]) => {
          this.remeraes = datos;
         
        },
        error: (error) => {
          console.log(error);
          this.messageService.add({
            severity: "error",
            summary: "Remera",
            detail: "Error al cargar la remera"
          });
        },
        complete: () => console.info('completo remera')
      });

  }
  
  showModal(){
    this.selectedRemera=null;
    this.displayAddEditModal=true;

  }

  hideModal(isClosed:boolean){
    this.displayAddEditModal=!isClosed;
  }

  saveRemeraToList(newData:Remera){
    if (this.selectedRemera){
      const remeraIndex = this.remeraes.findIndex(data => data.idremera=== newData.idremera);
     
      this.remeraes[remeraIndex]=newData;
    }else{
      this.remeraes.unshift(newData);
    }
    
  }

  editRemera(editData:any){
    this.selectedRemera=editData;
    this.displayAddEditModal=true;
  }

  deleteRemera(deleteData:any){
    this.confirmationService.confirm({
      message: 'Estas seguro de que quieres borrar ' + deleteData.nomremera + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

        this.remeraService.eliminarRemera(deleteData.idremera).subscribe(
          {
            next: (data) => {

              this.remeraes = this.remeraes.filter(val => val.idremera !== deleteData.idremera);
              
              this.messageService.add({ severity: 'success', summary: 'Exitosamente', detail: 'Remera Borrado', life: 3000 });
            },
            error: (error) => {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar el remera', life: 3000 });

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

