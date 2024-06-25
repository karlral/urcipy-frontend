import { Component, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Trayecto } from 'src/app/domain/trayecto';
import { TrayectoService } from 'src/app/service/trayecto.service';

@Component({
  selector: 'app-trayecto',
  templateUrl: './trayecto.component.html',
  styleUrls: ['./trayecto.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class TrayectoComponent {
  @ViewChild('dt') table!: Table;

  trayectoes: Trayecto[] = [];

  // para agregar


  trayecto: Trayecto = {
    idtrayecto: 0,
    nomtrayecto: '',
    km: 0
  };


  submitted = false;
  trayectoDialog = false;

  constructor(private messageService: MessageService,private trayectoService: TrayectoService,
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.trayectoService.listarTrayectoes().subscribe(
      {
        next: (dato: Trayecto[]) => {
          this.trayectoes = dato;
         
        },
        error: (error) => {
          console.log(error);
          this.messageService.add({
            severity: "error",
            summary: "Trayecto",
            detail: "Error al cargar la trayecto"
          });
        },
        complete: () => console.info('completo')
      });
  }

  //para agregar nuevo
  openNew() {
    this.trayecto = {
      idtrayecto: 0,
      nomtrayecto: "",
      km: 0
    }
    this.submitted = false;
    this.trayectoDialog = true;
  }

  hideDialog() {
    this.trayectoDialog = false;
    this.submitted = false;
  }

  saveTrayecto() {
    this.submitted = true;
    if (this.trayecto.nomtrayecto.trim() == '' || this.trayecto.nomtrayecto.trim() == null) {

      this.messageService.add({ severity: 'info', summary: 'Advertencia', detail: 'El nomtrayecto es requerido!!', life: 3000 });
      return;
    }



    if (this.trayecto.idtrayecto) {

      this.trayectoes[this.findIndexById(this.trayecto.idtrayecto)] = this.trayecto;
      
      this.trayectoService.actualizarTrayecto(this.trayecto).subscribe(
        {
          next: (dato) => {

            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'La trayecto ha sido actualizada con exito', life: 3000 });
          }, error: (error) => {
            console.log(error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la actualizacion de trayecto', life: 3000 });

          },
          complete: () => {
            console.log('Completo al actualizar');
          }
        });


    }
    else {

  
      this.trayectoes.push(this.trayecto);

      this.trayectoService.agregarTrayecto(this.trayecto).subscribe(
        {
          next: (dato) => {

            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'El trayecto ha sido agregada con exito', life: 3000 });
          }, error: (error) => {
            console.log(error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la trayecto', life: 3000 });

          },
          complete: () => {
            console.log('Completo el agregar');
          }

        }
      )


    }

    this.trayectoes = [...this.trayectoes];
    this.trayectoDialog = false;
    this.trayecto = {
      idtrayecto: 0,
      nomtrayecto: "",      
      km: 0
    }

  }

  findIndexById(idtrayecto: number): number {
    let index = -1;
    for (let i = 0; i < this.trayectoes.length; i++) {
      if (this.trayectoes[i].idtrayecto === idtrayecto) {
        index = i;
        break;
      }
    }
    console.log('El indice es '+index+' de '+idtrayecto);
    return index;
  }

  editTrayecto(regio: Trayecto) {
    this.trayecto = { ...regio };
    this.trayectoDialog = true;
  }

  deleteTrayecto(trayecto: Trayecto) {
    this.confirmationService.confirm({
      message: 'Estas seguro de que quieres borrar ' + trayecto.nomtrayecto + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

        this.trayectoService.eliminarTrayecto(trayecto.idtrayecto).subscribe(
          {
            next: (data) => {

              this.trayectoes = this.trayectoes.filter(val => val.idtrayecto !== trayecto.idtrayecto);
              this.trayecto = {
                idtrayecto: 0,
                nomtrayecto: "",      
                km: 0
              }
              this.messageService.add({ severity: 'success', summary: 'Exitosamente', detail: 'Trayecto Borrado', life: 3000 });
            },
            error: (error) => {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar el trayecto', life: 3000 });

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
