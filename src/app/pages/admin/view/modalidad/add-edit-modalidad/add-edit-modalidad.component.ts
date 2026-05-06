import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';

import { ModalidadService } from 'src/app/service/modalidad.service';

@Component({
  selector: 'app-add-edit-modalidad',
  templateUrl: './add-edit-modalidad.component.html',
  styleUrls: ['./add-edit-modalidad.component.css']
})
export class AddEditModalidadComponent  implements  OnChanges {
  @Input() displayAddEditModal: boolean = true;
  @Input() selectedModalidad:any=null;

  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clickAddEdit: EventEmitter<any> = new EventEmitter<any>();

  modalType="Agregar";

  

  modalidadForm = this.fb.group({
    idmodalidad:[null],
    nommodalidad: [''],
  });

  constructor(private fb: FormBuilder,
    private messageService: MessageService,
    private modalidadService: ModalidadService,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.selectedModalidad){
      this.modalType="Guardar";
      
      this.modalidadForm.patchValue(this.selectedModalidad);
      

    }else{
      this.modalidadForm.reset({
        nommodalidad: '',
      });
      this.modalType="Agregar";
    }
  }


  

  closeModal() {
    this.modalidadForm.reset({
      nommodalidad: '',
    });
    this.clickClose.emit(true);
  }

  mostrarVarModalidad() {
    
  }

  addEditModalidad() {


   

    if (this.selectedModalidad) {


      this.modalidadService.actualizarModalidad(this.modalidadForm.value).subscribe(
        {
          next: (dato) => {

            this.clickAddEdit.emit(dato);
            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'La modalidad ha sido actualizada con exito', life: 3000 });
            this.closeModal();
          }, error: (error) => {
            console.log("ERROR AL GUARDAR EL EVENTO"+error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la actualizacion de modalidad', life: 3000 });

          },
          complete: () => {
            console.log('Completo al actualizar');

          }
        });


    }
    else {

    

      this.modalidadService.agregarModalidad(this.modalidadForm.value).subscribe(
        {
          next: (dato) => {

           
            this.clickAddEdit.emit(dato);

            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'El modalidad ha sido agregada con exito', life: 3000 });

            this.closeModal()
            
          }, error: (error) => {
            console.log(error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la modalidad', life: 3000 });

          },
          complete: () => {
            console.log('Completo el agregar');

          }

        }
      )

    }


  }

 



}


