import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Corredorank } from 'src/app/domain/custom/corredorank';
import { Movimiento } from 'src/app/domain/movimiento';
import { CorredorService } from 'src/app/service/corredor.service';
import { MovimientoService } from 'src/app/service/movimiento.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class RankingComponent  implements OnInit {
  
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
  displayAddModal=false;
  entradas:number=0;
  salidas:number=0;

  constructor( private messageService: MessageService,
    private movimientoService: MovimientoService,
    private confirmationService:ConfirmationService,
    private corredorService:CorredorService
    
    ) { }
  ngOnInit(): void {
    this.rellenarDataTable();
  }

  rellenarDataTable(){
    this.movimientoService.listarMovimientosRankingPub().subscribe(
      {
        next: (datos: Corredorank[]) => {
          this.corredorankes = datos;
         // console.log(datos);
          this.calcularTotales()
         
        },
        error: (error) => {
          console.log(error);
          this.messageService.add({
            severity: "error",
            summary: "Movimiento",
            detail: "Error al cargar la movimiento"
          });
        },
        complete: () => console.info('completo movimiento')
      });

  }
  
  showModal(){
    this.displayAddModal=true;
  }

  hideModal(isClosed:boolean){
    this.displayAddModal=!isClosed;
  }

  addNomcorredor(corredor:string){
    this.corredorank.corredor=corredor;

  }

  saveMovimientoToList(newData:Movimiento){
   // console.log(newData);
     this.corredorank.idmovimiento= newData.idmovimiento;
     this.corredorank.fecha=newData.fecha;
     this.corredorank.entrada=newData.entrada;
     this.corredorank.puntua=newData.corredor.puntua;
     this.corredorank.idcorredor=newData.corredor.idcorredor;
      this.corredorankes.unshift(this.corredorank);
      this.activaPuntuaCorredor(this.corredorank.idcorredor)
  }

  deleteMovimiento(deleteData:any){
    this.confirmationService.confirm({
      message: 'Estas seguro de que quieres borrar ' + deleteData.corredor + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

        this.movimientoService.eliminarMovimiento(deleteData.idmovimiento).subscribe(
          {
            next: (data) => {

              this.desactivaPuntuaCorredor(deleteData.idcorredor);
              this.corredorankes = this.corredorankes.filter(val => val.idmovimiento !== deleteData.idmovimiento);
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

  calcularTotales() {
    let totalentrada = 0,totalsalida =0;
    for (let movi of this.corredorankes) {
        totalentrada += movi.entrada;
        totalsalida += movi.salida;
    }

    this.entradas = totalentrada;
    this.salidas =totalsalida;
}


activaPuntuaCorredor(idcorredor:any){

  this.corredorService.puntuarCorredor(idcorredor).subscribe(
    {
      next: (data) => {
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

