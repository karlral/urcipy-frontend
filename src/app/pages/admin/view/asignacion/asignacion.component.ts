import { Component, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Asignacion } from 'src/app/domain/asignacion';
import { AsignacionService } from 'src/app/service/asignacion.service';

@Component({
  selector: 'app-asignacion',
  templateUrl: './asignacion.component.html',
  styleUrls: ['./asignacion.component.css'],
    providers: [ConfirmationService, MessageService]
})
export class AsignacionComponent {
  @ViewChild('dt') table!: Table;

  asignaciones: Asignacion[] = [];

 

  asignacion: Asignacion = {
    idasignacion: 0,
    nomasignacion: '',
    tipoAsignacion: 1
  };


  submitted = false;
  asignacionDialog = false;

  constructor(private messageService: MessageService,private asignacionService: AsignacionService,
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.asignacionService.listarAsignaciones().subscribe(
      {
        next: (dato: Asignacion[]) => {
          this.asignaciones = dato;
          console.log(this.asignaciones);
         
        },
        error: (error) => {
          console.log(error);
          this.messageService.add({
            severity: "error",
            summary: "Asignacion",
            detail: "Error al cargar la asignacion"
          });
        },
        complete: () => console.info('completo')
      });
  }

  //para agregar nuevo
  openNew() {
    this.asignacion = {
      idasignacion: 0,
      nomasignacion: "",
      tipoAsignacion: 1
      
    }
    this.submitted = false;
    this.asignacionDialog = true;
  }

  hideDialog() {
    this.asignacionDialog = false;
    this.submitted = false;
  }

  saveAsignacion() {
    this.submitted = true;
    if (this.asignacion.nomasignacion.trim() == '' || this.asignacion.nomasignacion.trim() == null) {

      this.messageService.add({ severity: 'info', summary: 'Advertencia', detail: 'El nomasignacion es requerido!!', life: 3000 });
      return;
    }



    if (this.asignacion.idasignacion) {

      this.asignaciones[this.findIndexById(this.asignacion.idasignacion)] = this.asignacion;
      
      this.asignacionService.actualizarAsignacion(this.asignacion).subscribe(
        {
          next: (dato) => {

            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'La asignacion ha sido actualizada con exito', life: 3000 });
          }, error: (error) => {
            console.log(error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la actualizacion de asignacion', life: 3000 });

          },
          complete: () => {
            console.log('Completo al actualizar');
          }
        });


    }
    else {

  
      this.asignaciones.push(this.asignacion);

      this.asignacionService.agregarAsignacion(this.asignacion).subscribe(
        {
          next: (dato) => {

            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'El asignacion ha sido agregada con exito', life: 3000 });
          }, error: (error) => {
            console.log(error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la asignacion', life: 3000 });

          },
          complete: () => {
            console.log('Completo el agregar');
          }

        }
      )


    }

    this.asignaciones = [...this.asignaciones];
    this.asignacionDialog = false;
    this.asignacion = {
      idasignacion: 0,
      nomasignacion: "",      
      tipoAsignacion: 1
    }

  }

  findIndexById(idasignacion: number): number {
    let index = -1;
    for (let i = 0; i < this.asignaciones.length; i++) {
      if (this.asignaciones[i].idasignacion === idasignacion) {
        index = i;
        break;
      }
    }
    console.log('El indice es '+index+' de '+idasignacion);
    return index;
  }

  editAsignacion(regio: Asignacion) {
    this.asignacion = { ...regio };
    this.asignacionDialog = true;
  }

  deleteAsignacion(asignacion: Asignacion) {
    this.confirmationService.confirm({
      message: 'Estas seguro de que quieres borrar ' + asignacion.nomasignacion + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

        this.asignacionService.eliminarAsignacion(asignacion.idasignacion).subscribe(
          {
            next: (data) => {

              this.asignaciones = this.asignaciones.filter(val => val.idasignacion !== asignacion.idasignacion);
              this.asignacion = {
                idasignacion: 0,
                nomasignacion: "",      
                tipoAsignacion: 1
              }
              this.messageService.add({ severity: 'success', summary: 'Exitosamente', detail: 'Asignacion Borrado', life: 3000 });
            },
            error: (error) => {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar el asignacion', life: 3000 });

            },
            complete: () => {
              console.log('Completado');
            }
          }
        );


      }
    });
  }

  toast(){ 
    this.messageService.add({ 
        severity: "success", 
        detail: "Success! CSV file downloaded"
    }); 
}


}
