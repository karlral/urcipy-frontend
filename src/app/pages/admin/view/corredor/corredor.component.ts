import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import {ConfirmationService} from 'primeng/api';

import { Corredor } from 'src/app/domain/corredor';
import { CorredorService } from 'src/app/service/corredor.service';

@Component({
  selector: 'app-corredor',
  templateUrl: './corredor.component.html',
  styleUrls: ['./corredor.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class CorredorComponent implements OnInit {
  corredores: Corredor[] = [];
  selectedCorredor:any=null;
  displayAddEditModal=false;

  constructor( private messageService: MessageService,
    private corredorService: CorredorService,
    private confirmationService:ConfirmationService
    
    ) { }
  ngOnInit(): void {
    this.rellenarDataTable();
  }

  rellenarDataTable(){
    this.corredorService.listarCorredores().subscribe(
      {
        next: (datos: Corredor[]) => {
          this.corredores = datos;
          //console.log(this.corredores);
        },
        error: (error) => {
          console.log(error);
          this.messageService.add({
            severity: "error",
            summary: "Corredor",
            detail: "Error al cargar la corredor"
          });
        },
        complete: () => console.info('completo corredor')
      });

  }
  
  showModal(){
    this.selectedCorredor=null;
    this.displayAddEditModal=true;

  }

  hideModal(isClosed:boolean){
    this.displayAddEditModal=!isClosed;
  }

  saveCorredorToList(newData:Corredor){
    if (this.selectedCorredor){
      const corredorIndex = this.corredores.findIndex(data => data.idcorredor=== newData.idcorredor);
      console.log(newData);
      console.log(corredorIndex);
      this.corredores[corredorIndex]=newData;
    }else{
      this.corredores.unshift(newData);
    }
    
  }

  editCorredor(editData:any){
    this.selectedCorredor=editData;
    this.displayAddEditModal=true;
  }

  deleteCorredor(deleteData:any){
    this.confirmationService.confirm({
      message: 'Estas seguro de que quieres borrar ' + deleteData.nombre + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

        this.corredorService.eliminarCorredor(deleteData.idcorredor).subscribe(
          {
            next: (data) => {

              this.corredores = this.corredores.filter(val => val.idcorredor !== deleteData.idcorredor);
              
              this.messageService.add({ severity: 'success', summary: 'Exitosamente', detail: 'Corredor Borrado', life: 3000 });
            },
            error: (error) => {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar el corredor', life: 3000 });

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

