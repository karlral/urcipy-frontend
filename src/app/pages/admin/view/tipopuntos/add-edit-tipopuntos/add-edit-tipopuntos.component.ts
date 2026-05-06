import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';

import { TipopuntosService } from 'src/app/service/tipopuntos.service';

@Component({
  selector: 'app-add-edit-tipopuntos',
  templateUrl: './add-edit-tipopuntos.component.html',
  styleUrls: ['./add-edit-tipopuntos.component.css']
})
export class AddEditTipopuntosComponent  implements  OnChanges {
  @Input() displayAddEditModal: boolean = true;
  @Input() selectedTipopuntos:any=null;

  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clickAddEdit: EventEmitter<any> = new EventEmitter<any>();

  modalType="Agregar";

  

  tipopuntosForm = this.fb.group({
    idtipopuntos:[null],
    nomtipopuntos: [''],
  });

  constructor(private fb: FormBuilder,
    private messageService: MessageService,
    private tipopuntosService: TipopuntosService,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.selectedTipopuntos){
      this.modalType="Guardar";
      
      this.tipopuntosForm.patchValue(this.selectedTipopuntos);
      

    }else{
      this.tipopuntosForm.reset({
        nomtipopuntos: '',
      });
      this.modalType="Agregar";
    }
  }


  

  closeModal() {
    this.tipopuntosForm.reset({
      nomtipopuntos: '',
    });
    this.clickClose.emit(true);
  }

  mostrarVarTipo() {
    
  }

  addEditTipo() {


   

    if (this.selectedTipopuntos) {


      this.tipopuntosService.actualizarTipopuntos(this.tipopuntosForm.value).subscribe(
        {
          next: (dato) => {

            this.clickAddEdit.emit(dato);
            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'La tipopuntos ha sido actualizada con exito', life: 3000 });
            this.closeModal();
          }, error: (error) => {
            console.log("ERROR AL GUARDAR EL EVENTO"+error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la actualizacion de tipopuntos', life: 3000 });

          },
          complete: () => {
            console.log('Completo al actualizar');

          }
        });


    }
    else {

    

      this.tipopuntosService.agregarTipopuntos(this.tipopuntosForm.value).subscribe(
        {
          next: (dato) => {

           
            this.clickAddEdit.emit(dato);

            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'El tipopuntos ha sido agregada con exito', life: 3000 });

            this.closeModal()
            
          }, error: (error) => {
            console.log(error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la tipopuntos', life: 3000 });

          },
          complete: () => {
            console.log('Completo el agregar');

          }

        }
      )

    }


  }

 



}


