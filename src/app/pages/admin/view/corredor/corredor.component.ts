import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import {ConfirmationService} from 'primeng/api';

import { Corredor } from 'src/app/domain/corredor';
import { Corredormen } from 'src/app/domain/custom/corredormen';
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
    puntua: 0
  };
  displaySearch=true;
  buscado:string="";

  constructor( private messageService: MessageService,
    private corredorService: CorredorService,
    private confirmationService:ConfirmationService
    
    ) { }
  ngOnInit(): void {
   // this.rellenarDataTable();
  }

  rellenarDataTable(){
    this.corredorService.listarCorredores().subscribe(
      {
        next: (datos: Corredor[]) => {
          this.corredores = datos;
         
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
    this.selectedCorredormen.idcorredor=newData.idcorredor;
    this.selectedCorredormen.corredor=newData.nombre+" "+newData.apellido;
    this.selectedCorredormen.categoria=newData.categoria.nomcategoria;
    this.selectedCorredormen.club=newData.club.nomclub;
    this.selectedCorredormen.puntua=newData.puntua;

    if (this.selectedCorredor){
      const corredorIndex = this.corredoresmen.findIndex(data => data.idcorredor=== newData.idcorredor);
  
      this.corredoresmen[corredorIndex]=this.selectedCorredormen;
    }else{
      this.corredoresmen.unshift(this.selectedCorredormen);
    }
    
  }

  editCorredor(v_idcorredor:number){
    
    this.corredorService.obtenerCorredor(v_idcorredor).subscribe(
      {
        next: (dato) => {
          this.selectedCorredor = dato;
         // console.log(this.selectedCorredor);
          
          this.displayAddEditModal=true;         
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

  deleteCorredor(deleteData:any){
    this.confirmationService.confirm({
      message: 'Estas seguro de que quieres borrar ' + deleteData.corredor + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

        this.corredorService.eliminarCorredor(deleteData.idcorredor).subscribe(
          {
            next: (data) => {

              this.corredoresmen = this.corredoresmen.filter(val => val.idcorredor !== deleteData.idcorredor);
              
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

  activaPuntuaCorredor(activeData:any){
    this.confirmationService.confirm({
      message: 'Activar para puntuar el corredor ' + activeData.corredor + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

        this.corredorService.puntuarCorredor(activeData.idcorredor).subscribe(
          {
            next: (data) => {

              const corredorIndex = this.corredoresmen.findIndex(data => data.idcorredor=== activeData.idcorredor);
              this.corredoresmen[corredorIndex].puntua=1;
        
              this.messageService.add({ severity: 'success', summary: 'Exitosamente', detail: 'Corredor Puntua', life: 3000 });
            },
            error: (error) => {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al activar para puntuar el corredor', life: 3000 });

            },
            complete: () => {
              console.log('Completado');
            }
          }
        );


      }
    });
    
  }

  desactivaPuntuaCorredor(activeData:any){
    this.confirmationService.confirm({
      message: 'Desactivar para puntuar el corredor ' + activeData.corredor + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

        this.corredorService.despuntuarCorredor(activeData.idcorredor).subscribe(
          {
            next: (data) => {

              const corredorIndex = this.corredoresmen.findIndex(data => data.idcorredor=== activeData.idcorredor);
              this.corredoresmen[corredorIndex].puntua=0;
        
              this.messageService.add({ severity: 'success', summary: 'Exitosamente', detail: 'Corredor ya NO Puntua', life: 3000 });
            },
            error: (error) => {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al desactivar para puntuar el corredor', life: 3000 });

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

