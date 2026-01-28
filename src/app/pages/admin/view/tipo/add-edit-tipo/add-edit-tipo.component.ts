import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';

import { TipoService } from 'src/app/service/tipo.service';

@Component({
  selector: 'app-add-edit-tipo',
  templateUrl: './add-edit-tipo.component.html',
  styleUrls: ['./add-edit-tipo.component.css']
})
export class AddEditTipoComponent implements  OnChanges {
  @Input() displayAddEditModal: boolean = true;
  @Input() selectedTipo:any=null;

  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clickAddEdit: EventEmitter<any> = new EventEmitter<any>();

  modalType="Agregar";

  

  tipoForm = this.fb.group({
    idtipo:[null],
    nomtipo: [''],
  });

  constructor(private fb: FormBuilder,
    private messageService: MessageService,
    private tipoService: TipoService,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.selectedTipo){
      this.modalType="Guardar";
      
      this.tipoForm.patchValue(this.selectedTipo);
      

    }else{
      this.tipoForm.reset({
        nomtipo: '',
      });
      this.modalType="Agregar";
    }
  }


  

  closeModal() {
    this.tipoForm.reset({
      nomtipo: '',
    });
    this.clickClose.emit(true);
  }

  mostrarVarTipo() {
    
  }

  addEditTipo() {


   

    if (this.selectedTipo) {


      this.tipoService.actualizarTipo(this.tipoForm.value).subscribe(
        {
          next: (dato) => {

            this.clickAddEdit.emit(dato);
            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'La tipo ha sido actualizada con exito', life: 3000 });
            this.closeModal();
          }, error: (error) => {
            console.log("ERROR AL GUARDAR EL EVENTO"+error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la actualizacion de tipo', life: 3000 });

          },
          complete: () => {
            console.log('Completo al actualizar');

          }
        });


    }
    else {

    

      this.tipoService.agregarTipo(this.tipoForm.value).subscribe(
        {
          next: (dato) => {

           
            this.clickAddEdit.emit(dato);

            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'El tipo ha sido agregada con exito', life: 3000 });

            this.closeModal()
            
          }, error: (error) => {
            console.log(error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la tipo', life: 3000 });

          },
          complete: () => {
            console.log('Completo el agregar');

          }

        }
      )

    }


  }

 



}


