import { Component, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Dorsal } from 'src/app/domain/dorsal';
import { DorsalService } from 'src/app/service/dorsal.service';

@Component({
  selector: 'app-dorsal',
  templateUrl: './dorsal.component.html',
  styleUrls: ['./dorsal.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class DorsalComponent {
  @ViewChild('dt') table!: Table;

  dorsales: Dorsal[] = [];

  // para agregar


  dorsal: Dorsal = {
    iddorsal: 0,
    chip: '',
    color: '',
    activo: false,
  };

  colores = [
    { label: 'Naranjado', value: 'Naranjado' },
    { label: 'Amarillo', value: 'Amarillo' },
    { label: 'Celeste', value: 'Celeste' },
    
  ];


  submitted = false;
  dorsalDialog = false;

  constructor(private messageService: MessageService,private dorsalService: DorsalService,
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.dorsalService.listarDorsales().subscribe(
      {
        next: (dato: Dorsal[]) => {
          this.dorsales = dato;
         
        },
        error: (error) => {
          console.log(error);
          this.messageService.add({
            severity: "error",
            summary: "Dorsal",
            detail: "Error al cargar la dorsal"
          });
        },
        complete: () => console.info('completo')
      });
  }

  //para agregar nuevo
  openNew() {
    this.dorsal = {
      iddorsal: 0,
      chip: '',
    color: '',
    activo: true
      
    }
    this.submitted = false;
    this.dorsalDialog = true;
  }

  openNewReg() {
    for (let i = 2; i < 200; i++) {
      this.dorsal = {
        iddorsal: i,
        chip: 'ZZ'+i.toString().padStart(5, '0'),
        color: 'Naranjado',
        activo: true
      }
      this.saveDorsal();
    }
    for (let i = 600; i < 800; i++) {
      this.dorsal = {
        iddorsal: i,
        chip: 'ZZ'+i.toString().padStart(5, '0'),
        color: 'Amarillo',
        activo: true
      }
      this.saveDorsal();
    }
  }


  hideDialog() {
    this.dorsalDialog = false;
    this.submitted = false;
  }

  saveDorsal() {
    this.submitted = true;
    if (this.dorsal.iddorsal <0 ) {

      this.messageService.add({ severity: 'info', summary: 'Advertencia', detail: 'El nro de dorsal no puede ser menor que 0!!', life: 3000 });
      return;
    }



    if (this.dorsal.iddorsal) {

      this.dorsales[this.findIndexById(this.dorsal.iddorsal)] = this.dorsal;
      
      this.dorsalService.actualizarDorsal(this.dorsal).subscribe(
        {
          next: (dato) => {

            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'La dorsal ha sido actualizada con exito', life: 3000 });
          }, error: (error) => {
            console.log(error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la actualizacion de dorsal', life: 3000 });

          },
          complete: () => {
            console.log('Completo al actualizar');
          }
        });


    }
    else {

  
      this.dorsales.push(this.dorsal);

      this.dorsalService.agregarDorsal(this.dorsal).subscribe(
        {
          next: (dato) => {

            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'El dorsal ha sido agregada con exito', life: 3000 });
          }, error: (error) => {
            console.log(error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la dorsal', life: 3000 });

          },
          complete: () => {
            console.log('Completo el agregar');
          }

        }
      )


    }

    this.dorsales = [...this.dorsales];
    this.dorsalDialog = false;
    this.dorsal = {
      iddorsal: 0,
      chip: '',
    color: '',
    activo: true
    }

  }

  findIndexById(iddorsal: number): number {
    let index = -1;
    for (let i = 0; i < this.dorsales.length; i++) {
      if (this.dorsales[i].iddorsal === iddorsal) {
        index = i;
        break;
      }
    }
    console.log('El indice es '+index+' de '+iddorsal);
    return index;
  }

  editDorsal(regio: Dorsal) {
    this.dorsal = { ...regio };
    this.dorsalDialog = true;
  }

  deleteDorsal(dorsal: Dorsal) {
    this.confirmationService.confirm({
      message: 'Estas seguro de que quieres borrar Dorsal Nro:' + dorsal.iddorsal + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

        this.dorsalService.eliminarDorsal(dorsal.iddorsal).subscribe(
          {
            next: (data) => {

              this.dorsales = this.dorsales.filter(val => val.iddorsal !== dorsal.iddorsal);
              this.dorsal = {
                iddorsal: 0,
                chip: '',
                color: '',
                activo: true
              }
              this.messageService.add({ severity: 'success', summary: 'Exitosamente', detail: 'Dorsal Borrado', life: 3000 });
            },
            error: (error) => {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar el dorsal', life: 3000 });

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
