import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { Ciudad } from 'src/app/domain/ciudad';
import { Pais } from 'src/app/domain/pais';

import { CiudadService } from 'src/app/service/ciudad.service';
import { PaisService } from 'src/app/service/pais.service';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class CiudadComponent {

  paises: Pais[] = [];
  ciudades: Ciudad[] = [];

  // para agregar

 
  ciudad: Ciudad = {
    idciudad: 0,
    nomciudad: '',
    pais: {
      idpais: 0,
      nompais: '',
      nacionalidad: ''
    }
  };


  submitted = false;
  ciudadDialog = false;

  constructor(private messageService: MessageService, private paisService: PaisService, private ciudadService: CiudadService,
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.ciudadService.listarCiudades().subscribe(
      {
        next: (dato: Ciudad[]) => {
          this.ciudades = dato;
        
        },
        error: (error) => {
          console.log(error);
          this.messageService.add({
            severity: "error",
            summary: "Ciudad",
            detail: "Error al cargar la ciudad"
          });
        },
        complete: () => console.info('completo ciudad')
      });

      this.paisService.listarPaises().subscribe(
        (dato:any) => {
          this.paises=dato;
        
        },(error) => {
          console.log(error);
          this.messageService.add({
            severity: "error",
            summary: "Pais",
            detail: "Error al cargar el Pais"
          });       
        }
      )
  }

  //para agregar nuevo
  openNew() {
    this.ciudad  = {
      idciudad: 0,
      nomciudad: '',
      pais: {
        idpais: 0,
        nompais: '',
        nacionalidad: ''
      }
    };
    this.submitted = false;
    this.ciudadDialog = true;
  }

  hideDialog() {
    this.ciudadDialog = false;
    this.submitted = false;
  }

  saveCiudad() {
    this.submitted = true;
    if (this.ciudad.nomciudad.trim() == '' || this.ciudad.nomciudad.trim() == null) {

      this.messageService.add({ severity: 'info', summary: 'Advertencia', detail: 'El nomciudad es requerido!!', life: 3000 });
      return;
    }



    if (this.ciudad.idciudad) {

      this.ciudades[this.findIndexById(this.ciudad.idciudad)] = this.ciudad;

      this.ciudadService.actualizarCiudad(this.ciudad).subscribe(
        {
          next: (dato) => {

            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'La ciudad ha sido actualizada con exito', life: 3000 });
          }, error: (error) => {
            console.log(error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la actualizacion de ciudad', life: 3000 });

          },
          complete: () => {
            console.log('Completo al actualizar');
          }
        });


    }
    else {


      this.ciudades.push(this.ciudad);
      console.log("antes de agregar ");
     

      this.ciudadService.agregarCiudad(this.ciudad).subscribe(
        {
          next: (dato) => {

            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'El ciudad ha sido agregada con exito', life: 3000 });
          }, error: (error) => {
            console.log(error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la ciudad', life: 3000 });

          },
          complete: () => {
            console.log('Completo el agregar');
          }

        }
      )


    }

    this.ciudades = [...this.ciudades];
    this.ciudadDialog = false;
    this.ciudad  = {
      idciudad: 0,
      nomciudad: '',
      pais: {
        idpais: 0,
        nompais: '',
        nacionalidad: ''
      }
    };

  }

  findIndexById(idciudad: number): number {
    let index = -1;
    for (let i = 0; i < this.ciudades.length; i++) {
      if (this.ciudades[i].idciudad === idciudad) {
        index = i;
        break;
      }
    }
    console.log('El indice es ' + index + ' de ' + idciudad);
    return index;
  }

  editCiudad(regio: Ciudad) {
    this.ciudad = { ...regio };
    this.ciudadDialog = true;
  }

  deleteCiudad(ciudad: Ciudad) {
    this.confirmationService.confirm({
      message: 'Estas seguro de que quieres borrar ' + ciudad.nomciudad + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

        this.ciudadService.eliminarCiudad(ciudad.idciudad).subscribe(
          {
            next: (data) => {

              this.ciudades = this.ciudades.filter(val => val.idciudad !== ciudad.idciudad);
              this.ciudad  = {
                idciudad: 0,
                nomciudad: '',
                pais: {
                  idpais: 0,
                  nompais: '',
                  nacionalidad: ''
                }
              };
              this.messageService.add({ severity: 'success', summary: 'Exitosamente', detail: 'Ciudad Borrado', life: 3000 });
            },
            error: (error) => {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar el ciudad', life: 3000 });

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
