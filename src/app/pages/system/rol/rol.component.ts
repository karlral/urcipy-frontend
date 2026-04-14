import { Component, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Rol } from 'src/app/domain/rol';
import { RolService } from 'src/app/service/rol.service';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class RolComponent {
  @ViewChild('dt') table!: Table;

  roles: Rol[] = [];

  // para agregar


  rol: Rol = {
    idrol: 0,
    nombre: ''
  };


  submitted = false;
  rolDialog = false;

  constructor(private messageService: MessageService,private rolService: RolService,
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.rolService.listarRoles().subscribe(
      {
        next: (dato: Rol[]) => {
          this.roles = dato;
         
        },
        error: (error) => {
          console.log(error);
          this.messageService.add({
            severity: "error",
            summary: "Rol",
            detail: "Error al cargar la rol"
          });
        },
        complete: () => console.info('completo')
      });
  }

  //para agregar nuevo
  openNew() {
    this.rol = {
      idrol: 0,
      nombre: ""
    }
    this.submitted = false;
    this.rolDialog = true;
  }

  hideDialog() {
    this.rolDialog = false;
    this.submitted = false;
  }

  saveRol() {
    this.submitted = true;
    if (this.rol.nombre.trim() == '' || this.rol.nombre.trim() == null) {

      this.messageService.add({ severity: 'info', summary: 'Advertencia', detail: 'El nombre es requerido!!', life: 3000 });
      return;
    }



    if (this.rol.idrol) {

      this.roles[this.findIndexById(this.rol.idrol)] = this.rol;
      
      this.rolService.actualizarRol(this.rol).subscribe(
        {
          next: (dato) => {

            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'La rol ha sido actualizada con exito', life: 3000 });
          }, error: (error) => {
            console.log(error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la actualizacion de rol', life: 3000 });

          },
          complete: () => {
            console.log('Completo al actualizar');
          }
        });


    }
    else {

  
      this.roles.push(this.rol);

      this.rolService.agregarRol(this.rol).subscribe(
        {
          next: (dato) => {

            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'El rol ha sido agregada con exito', life: 3000 });
          }, error: (error) => {
            console.log(error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la rol', life: 3000 });

          },
          complete: () => {
            console.log('Completo el agregar');
          }

        }
      )


    }

    this.roles = [...this.roles];
    this.rolDialog = false;
    this.rol = {
      idrol: 0,
      nombre: ""
    }

  }

  findIndexById(idrol: number): number {
    let index = -1;
    for (let i = 0; i < this.roles.length; i++) {
      if (this.roles[i].idrol === idrol) {
        index = i;
        break;
      }
    }
    console.log('El indice es '+index+' de '+idrol);
    return index;
  }

  editRol(regio: Rol) {
    this.rol = { ...regio };
    this.rolDialog = true;
  }

  deleteRol(rol: Rol) {
    this.confirmationService.confirm({
      message: 'Estas seguro de que quieres borrar ' + rol.nombre + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

        this.rolService.eliminarRol(rol.idrol).subscribe(
          {
            next: (data) => {

              this.roles = this.roles.filter(val => val.idrol !== rol.idrol);
              this.rol = {
                idrol: 0,
                nombre: ""
              }
              this.messageService.add({ severity: 'success', summary: 'Exitosamente', detail: 'Rol Borrado', life: 3000 });
            },
            error: (error) => {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar el rol', life: 3000 });

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

/*exportExcel2() {
  import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(
          this.table.filteredValue
              ? this.table.filteredValue
              : this.roles
      );
      const workbook = {
          Sheets: { data: worksheet },
          SheetNames: ['data'],
      };
      const excelBuffer: any = xlsx.write(workbook, {
          bookType: 'xlsx',
          type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'roles');
  });
}

saveAsExcelFile(buffer: any, fileName: string): void {
  let EXCEL_TYPE =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  let EXCEL_EXTENSION = '.xlsx';
  const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE,
  });
  FileSaver.saveAs(
      data,
      fileName + '_' + new Date().getTime() + EXCEL_EXTENSION
  );
}*/

}
