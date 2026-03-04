import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import {ConfirmationService} from 'primeng/api';

import { Corredorank } from 'src/app/domain/custom/corredorank';
import { Corredormen } from 'src/app/domain/custom/corredormen';
import { CorredorService } from 'src/app/service/corredor.service';
import { MovimientoService } from 'src/app/service/movimiento.service';

@Component({
  selector: 'app-rankcorre',
  templateUrl: './rankcorre.component.html',
  styleUrls: ['./rankcorre.component.css'],
    providers: [MessageService,ConfirmationService]
})
export class RankcorreComponent  {
 


   selectedCorredor:any=null;
 displayAddModal=false;
 
corredorankes: Corredorank[] = [];
  corredorank: Corredorank={
    idmovimiento: 0,
    fecha: new Date,
    nomconcepto: '',
    idcorredor: 0,
    corredor: '',
    club: '',
    categoria: '',
    entrada: 0,
    salida: 0,
    foto: '',
    puntua: 0,
    cantidad: 0
  }; 

  corredoresmen:Corredormen[]=[];
  selectedCorredormen:Corredormen={
    idcorredor: 0,
    nombre: '',
    apellido: '',
    club: '',
    fecnac: new Date,
    categoria: '',
    fecmodi: new Date,
    corredor: '',
    carnetfpc: 0,
    foto: '',
    puntua: 0,
    ci: ''
  };
  displaySearch=true;
  buscado:string="";

 
  

  constructor( private messageService: MessageService,
    private corredorService: CorredorService,
    private confirmationService:ConfirmationService,
    private movimientoService:MovimientoService
    
    ) { }


  
  
  showModal(corredor:Corredormen){
    this.selectedCorredor=corredor;
    this.displayAddModal=true;

  }
  

  hideModal(isClosed:boolean){
    this.displayAddModal=!isClosed;
  }

  updateCorredorToList(newData:Corredormen){
    this.selectedCorredormen=newData;
   
    const corredorIndex = this.corredoresmen.findIndex(data => data.idcorredor=== newData.idcorredor);
    this.corredoresmen[corredorIndex]=this.selectedCorredormen;
    
    
    this.activaPuntuaCorredor(newData.idcorredor)
    
  }




  deleteMovimiento(deleteData:any){
    this.confirmationService.confirm({
      message: 'Estas seguro de que quieres borrar para puntuar de ' + deleteData.nombre + " " + deleteData.apellido + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

        this.movimientoService.eliminarMoviRank(deleteData.ci).subscribe(
          {
            next: (data) => {

              this.desactivaPuntuaCorredor(deleteData.idcorredor);
              this.messageService.add({ severity: 'success', summary: 'Exitosamente', detail: 'Movimiento Borrado', life: 3000 });
            },
            error: (error) => {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar el movimiento', life: 3000 });

            },
            complete: () => {
              console.log('Completado');
            }
          }
        );


      }
    });
    
  }

  corredorSearch(buscado:string){
    console.log('Buscamos la cantidad de registros con '+buscado);
    this.displaySearch=false;
    this.corredorService.listarCorredoresmen(buscado).subscribe(
      {
        next: (datos: Corredormen[]) => {
          this.corredoresmen = datos;
         
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

  showSearch(){
    this.buscado="";
    this.displaySearch=true;
  }

  activaPuntuaCorredor(idcorredor:any){

  this.corredorService.puntuarCorredor(idcorredor).subscribe(
    {
      next: (data) => {
        const corredorIndex = this.corredoresmen.findIndex(data => data.idcorredor=== idcorredor);
              this.corredoresmen[corredorIndex].puntua=1;
        this.messageService.add({ severity: 'success', summary: 'Exitosamente', detail: 'Corredor Puntua', life: 3000 });
      },
      error: (error) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al activar para puntuar el corredor', life: 3000 });

      },
      complete: () => {
        console.log('Completado Corredor Punta activado');
      }
    }
  );
}

desactivaPuntuaCorredor(idcorredor:any){

  this.corredorService.despuntuarCorredor(idcorredor).subscribe(
    {
      next: (data) => {
        const corredorIndex = this.corredoresmen.findIndex(data => data.idcorredor=== idcorredor);
              this.corredoresmen[corredorIndex].puntua=0;
        this.messageService.add({ severity: 'success', summary: 'Exitosamente', detail: 'Corredor ya NO Puntua', life: 3000 });
      },
      error: (error) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al desactivar para puntuar el corredor', life: 3000 });
      },
      complete: () => {
        console.log('Completado corredor no puntua');
      }
    }
  );
}

 



}

