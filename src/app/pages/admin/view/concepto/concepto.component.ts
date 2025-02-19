import { Component, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Concepto } from 'src/app/domain/concepto';
import { ConceptoService } from 'src/app/service/concepto.service';
import { Regional } from 'src/app/domain/regional';
import system from 'src/app/service/helpersys';

@Component({
  selector: 'app-concepto',
  templateUrl: './concepto.component.html',
  styleUrls: ['./concepto.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class ConceptoComponent {
  @ViewChild('dt') table!: Table;

  conceptoes: Concepto[] = [];

  // para agregar
regional:Regional={
  idregional: system,
  nomregional: '',
  nomcorto: '',
  telefono: '',
  direccion: '',
  email: '',
  ano: 0,
  presentacion: '',
  logo: ''
}

  concepto: Concepto = {
    idconcepto: 0,
    nomconcepto: '',
    tipo: 1,
    regional: this.regional
  };


  submitted = false;
  conceptoDialog = false;

  constructor(private messageService: MessageService,private conceptoService: ConceptoService,
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.conceptoService.listarConceptoes().subscribe(
      {
        next: (dato: Concepto[]) => {
          this.conceptoes = dato;
         
        },
        error: (error) => {
          console.log(error);
          this.messageService.add({
            severity: "error",
            summary: "Concepto",
            detail: "Error al cargar la concepto"
          });
        },
        complete: () => console.info('completo')
      });
  }

  //para agregar nuevo
  openNew() {
    this.concepto = {
      idconcepto: 0,
      nomconcepto: "",
      tipo: 0,
      regional: this.regional
    }
    this.submitted = false;
    this.conceptoDialog = true;
  }

  hideDialog() {
    this.conceptoDialog = false;
    this.submitted = false;
  }

  saveConcepto() {
    this.submitted = true;
    if (this.concepto.nomconcepto.trim() == '' || this.concepto.nomconcepto.trim() == null) {

      this.messageService.add({ severity: 'info', summary: 'Advertencia', detail: 'El nomconcepto es requerido!!', life: 3000 });
      return;
    }



    if (this.concepto.idconcepto) {

      this.conceptoes[this.findIndexById(this.concepto.idconcepto)] = this.concepto;
      
      this.conceptoService.actualizarConcepto(this.concepto).subscribe(
        {
          next: (dato) => {

            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'La concepto ha sido actualizada con exito', life: 3000 });
          }, error: (error) => {
            console.log(error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la actualizacion de concepto', life: 3000 });

          },
          complete: () => {
            console.log('Completo al actualizar');
          }
        });


    }
    else {

  
      this.conceptoes.push(this.concepto);

      this.conceptoService.agregarConcepto(this.concepto).subscribe(
        {
          next: (dato) => {

            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'El concepto ha sido agregada con exito', life: 3000 });
          }, error: (error) => {
            console.log(error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la concepto', life: 3000 });

          },
          complete: () => {
            console.log('Completo el agregar');
          }

        }
      )


    }

    this.conceptoes = [...this.conceptoes];
    this.conceptoDialog = false;
    this.concepto = {
      idconcepto: 0,
      nomconcepto: "",      
      tipo: 0,
      regional: this.regional
    }

  }

  findIndexById(idconcepto: number): number {
    let index = -1;
    for (let i = 0; i < this.conceptoes.length; i++) {
      if (this.conceptoes[i].idconcepto === idconcepto) {
        index = i;
        break;
      }
    }
    console.log('El indice es '+index+' de '+idconcepto);
    return index;
  }

  editConcepto(regio: Concepto) {
    this.concepto = { ...regio };
    this.conceptoDialog = true;
  }

  deleteConcepto(concepto: Concepto) {
    this.confirmationService.confirm({
      message: 'Estas seguro de que quieres borrar ' + concepto.nomconcepto + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

        this.conceptoService.eliminarConcepto(concepto.idconcepto).subscribe(
          {
            next: (data) => {

              this.conceptoes = this.conceptoes.filter(val => val.idconcepto !== concepto.idconcepto);
              this.concepto = {
                idconcepto: 0,
                nomconcepto: "",      
                tipo: 0,
                regional: this.regional
              }
              this.messageService.add({ severity: 'success', summary: 'Exitosamente', detail: 'Concepto Borrado', life: 3000 });
            },
            error: (error) => {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar el concepto', life: 3000 });

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
