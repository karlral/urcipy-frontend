import { Component, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Pais } from 'src/app/domain/pais';
import { PaisService } from 'src/app/service/pais.service';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class PaisComponent {
  @ViewChild('dt') table!: Table;

  paises: Pais[] = [];

  // para agregar


  pais: Pais = {
    idpais: 0,
    nompais: '',
    nacionalidad: ''
  };


  submitted = false;
  paisDialog = false;

  constructor(private messageService: MessageService,private paisService: PaisService,
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.paisService.listarPaises().subscribe(
      {
        next: (dato: Pais[]) => {
          this.paises = dato;
         
        },
        error: (error) => {
          console.log(error);
          this.messageService.add({
            severity: "error",
            summary: "Pais",
            detail: "Error al cargar la pais"
          });
        },
        complete: () => console.info('completo')
      });
  }

  //para agregar nuevo
  openNew() {
    this.pais = {
      idpais: 0,
      nompais: "",
      nacionalidad: ""
    }
    this.submitted = false;
    this.paisDialog = true;
  }

  hideDialog() {
    this.paisDialog = false;
    this.submitted = false;
  }

  savePais() {
    this.submitted = true;
    if (this.pais.nompais.trim() == '' || this.pais.nompais.trim() == null) {

      this.messageService.add({ severity: 'info', summary: 'Advertencia', detail: 'El nompais es requerido!!', life: 3000 });
      return;
    }



    if (this.pais.idpais) {

      this.paises[this.findIndexById(this.pais.idpais)] = this.pais;
      
      this.paisService.actualizarPais(this.pais).subscribe(
        {
          next: (dato) => {

            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'La pais ha sido actualizada con exito', life: 3000 });
          }, error: (error) => {
            console.log(error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la actualizacion de pais', life: 3000 });

          },
          complete: () => {
            console.log('Completo al actualizar');
          }
        });


    }
    else {

  
      this.paises.push(this.pais);

      this.paisService.agregarPais(this.pais).subscribe(
        {
          next: (dato) => {

            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'El pais ha sido agregada con exito', life: 3000 });
          }, error: (error) => {
            console.log(error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la pais', life: 3000 });

          },
          complete: () => {
            console.log('Completo el agregar');
          }

        }
      )


    }

    this.paises = [...this.paises];
    this.paisDialog = false;
    this.pais = {
      idpais: 0,
      nompais: "",      
      nacionalidad: ""
    }

  }

  findIndexById(idpais: number): number {
    let index = -1;
    for (let i = 0; i < this.paises.length; i++) {
      if (this.paises[i].idpais === idpais) {
        index = i;
        break;
      }
    }
    console.log('El indice es '+index+' de '+idpais);
    return index;
  }

  editPais(regio: Pais) {
    this.pais = { ...regio };
    this.paisDialog = true;
  }

  deletePais(pais: Pais) {
    this.confirmationService.confirm({
      message: 'Estas seguro de que quieres borrar ' + pais.nompais + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

        this.paisService.eliminarPais(pais.idpais).subscribe(
          {
            next: (data) => {

              this.paises = this.paises.filter(val => val.idpais !== pais.idpais);
              this.pais = {
                idpais: 0,
                nompais: "",      
                nacionalidad: ""
              }
              this.messageService.add({ severity: 'success', summary: 'Exitosamente', detail: 'Pais Borrado', life: 3000 });
            },
            error: (error) => {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar el pais', life: 3000 });

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
              : this.paises
      );
      const workbook = {
          Sheets: { data: worksheet },
          SheetNames: ['data'],
      };
      const excelBuffer: any = xlsx.write(workbook, {
          bookType: 'xlsx',
          type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'paises');
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
