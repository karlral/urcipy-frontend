import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';

import { RemeraService } from 'src/app/service/remera.service';

@Component({
  selector: 'app-add-edit-remera',
  templateUrl: './add-edit-remera.component.html',
  styleUrls: ['./add-edit-remera.component.css']
})
export class AddEditRemeraComponent implements  OnChanges {
  @Input() displayAddEditModal: boolean = true;
  @Input() selectedRemera:any=null;

  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clickAddEdit: EventEmitter<any> = new EventEmitter<any>();

  modalType="Agregar";

  

  remeraForm = this.fb.group({
    idremera:[null],
    nomremera: [''],
  });

  constructor(private fb: FormBuilder,
    private messageService: MessageService,
    private remeraService: RemeraService,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.selectedRemera){
      this.modalType="Guardar";
      
      this.remeraForm.patchValue(this.selectedRemera);
      

    }else{
      this.remeraForm.reset({
        nomremera: '',
      });
      this.modalType="Agregar";
    }
  }


  

  closeModal() {
    this.remeraForm.reset({
      nomremera: '',
    });
    this.clickClose.emit(true);
  }

  mostrarVarRemera() {
    
  }

  addEditRemera() {


   

    if (this.selectedRemera) {


      this.remeraService.actualizarRemera(this.remeraForm.value).subscribe(
        {
          next: (dato) => {

            this.clickAddEdit.emit(dato);
            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'La remera ha sido actualizada con exito', life: 3000 });
            this.closeModal();
          }, error: (error) => {
            console.log("ERROR AL GUARDAR EL EVENTO"+error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la actualizacion de remera', life: 3000 });

          },
          complete: () => {
            console.log('Completo al actualizar');

          }
        });


    }
    else {

    

      this.remeraService.agregarRemera(this.remeraForm.value).subscribe(
        {
          next: (dato) => {

           
            this.clickAddEdit.emit(dato);

            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'El remera ha sido agregada con exito', life: 3000 });

            this.closeModal()
            
          }, error: (error) => {
            console.log(error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la remera', life: 3000 });

          },
          complete: () => {
            console.log('Completo el agregar');

          }

        }
      )

    }


  }

 



}
