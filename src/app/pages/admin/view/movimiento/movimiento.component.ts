import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Puncorredor } from 'src/app/domain/custom/puncorredor';
import { Movimiento } from 'src/app/domain/movimiento';
import { MovimientoService } from 'src/app/service/movimiento.service';
import { ParticipanteService } from 'src/app/service/participante.service';

@Component({
  selector: 'app-movimiento',
  templateUrl: './movimiento.component.html',
  styleUrls: ['./movimiento.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class MovimientoComponent  implements OnInit {
  
  movimientoes: Movimiento[] = [];
  selectedMovimiento:any=null;
  displayAddEditModal=false;
  entradas:number=0;
  salidas:number=0;

 

  constructor( private messageService: MessageService,
    private movimientoService: MovimientoService,
    private confirmationService:ConfirmationService
    
    ) { }
  ngOnInit(): void {
    this.rellenarDataTable();
  }

  rellenarDataTable(){
    this.movimientoService.listarMovimientoes().subscribe(
      {
        next: (datos: Movimiento[]) => {
          this.movimientoes = datos;
          //console.log(datos);
          this.calcularTotales();
         
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
    this.selectedMovimiento=null;
    this.displayAddEditModal=true;

  }

  hideModal(isClosed:boolean){
    this.displayAddEditModal=!isClosed;
  }

  editMovimiento(editData:any){
    this.selectedMovimiento=editData;
    this.displayAddEditModal=true;
  }

  saveMovimientoToList(newData:Movimiento){   
      this.movimientoes.unshift(newData);
      this.rellenarDataTable();
  }

  deleteMovimiento(deleteData:any){
    this.confirmationService.confirm({
      message: 'Estas seguro de que quieres borrar ' + deleteData.concepto.nomconcepto + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

        this.movimientoService.eliminarMovimiento(deleteData.idmovimiento).subscribe(
          {
            next: (data) => {


              //this.movimientoes = this.movimientoes.filter(val => val.idmovimiento !== deleteData.idmovimiento);
              this.rellenarDataTable();
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
    for (let movi of this.movimientoes) {
        totalentrada += movi.entrada;
        totalsalida += movi.salida;
    }

    this.entradas = totalentrada;
    this.salidas =totalsalida;
}



}

