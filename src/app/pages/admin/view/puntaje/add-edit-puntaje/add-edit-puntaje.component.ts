import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';

import { Regional } from 'src/app/domain/regional';
import { PuntajeService } from 'src/app/service/puntaje.service';
import system from 'src/app/service/helpersys';

@Component({
  selector: 'app-add-edit-puntaje',
  templateUrl: './add-edit-puntaje.component.html',
  styleUrls: ['./add-edit-puntaje.component.css']
})
export class AddEditPuntajeComponent implements  OnChanges {
  @Input() displayAddEditModal: boolean = true;
  @Input() selectedPuntaje:any=null;

  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clickAddEdit: EventEmitter<any> = new EventEmitter<any>();

  modalType="Agregar";

  regional:Regional={
    idregional: system,
    nomregional: '',
    nomcorto: '',
    logo: '',
    telefono: '',
    direccion: '',
    email: '',
    ano: 0,
    presentacion: ''
  };

  puntajeForm = this.fb.group({
    idpuntaje:[null],
    posicion: [0],
    puntos: [0],
    regional:[this.regional]
  });

  constructor(private fb: FormBuilder,
    private messageService: MessageService,
    private puntajeService: PuntajeService,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.selectedPuntaje){
      this.modalType="Guardar";
      
      this.puntajeForm.patchValue(this.selectedPuntaje);
      

    }else{
      this.puntajeForm.reset({
        regional:this.regional
      });
      this.modalType="Agregar";
    }
  }


  

  closeModal() {
    this.puntajeForm.reset({
      regional:this.regional
    });
    this.clickClose.emit(true);
  }

  mostrarVarPuntaje() {
    
  }

  addEditPuntaje() {


   

    if (this.selectedPuntaje) {


      this.puntajeService.actualizarPuntaje(this.puntajeForm.value).subscribe(
        {
          next: (dato) => {

            this.clickAddEdit.emit(dato);
            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'La puntaje ha sido actualizada con exito', life: 3000 });
            this.closeModal();
          }, error: (error) => {
            console.log("ERROR AL GUARDAR EL EVENTO"+error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la actualizacion de puntaje', life: 3000 });

          },
          complete: () => {
            console.log('Completo al actualizar');

          }
        });


    }
    else {

    

      this.puntajeService.agregarPuntaje(this.puntajeForm.value).subscribe(
        {
          next: (dato) => {

           
            this.clickAddEdit.emit(dato);

            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'El puntaje ha sido agregada con exito', life: 3000 });

            this.closeModal()
            
          }, error: (error) => {
            console.log(error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la puntaje', life: 3000 });

          },
          complete: () => {
            console.log('Completo el agregar');

          }

        }
      )

    }


  }

 



}
