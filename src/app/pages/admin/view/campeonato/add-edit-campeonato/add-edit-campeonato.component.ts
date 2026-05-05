import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';

import { Regional } from 'src/app/domain/regional';
import { CampeonatoService } from 'src/app/service/campeonato.service';
import baserUrl from 'src/app/service/helper';
import system from 'src/app/service/helpersys';

@Component({
  selector: 'app-add-edit-campeonato',
  templateUrl: './add-edit-campeonato.component.html',
  styleUrls: ['./add-edit-campeonato.component.css']
})
export class AddEditCampeonatoComponent implements  OnChanges {
  @Input() displayAddEditModal: boolean = true;
  @Input() selectedCampeonato:any=null;

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

  campeonatoForm = this.fb.group({
    idcampeonato:[null],
    nomcampeonato: [''],
    ruta: [''],
    regional:[this.regional],
    
  });

  // para agregar
  mediaLocation = `${baserUrl}/media/`;
  url?: String;
  currentFile?: File;
  fileName = '';
  preview = '';

  constructor(private fb: FormBuilder,
    private messageService: MessageService,
    private campeonatoService: CampeonatoService,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.selectedCampeonato){
      this.modalType="Guardar";
      
      this.campeonatoForm.patchValue(this.selectedCampeonato);
      

    }else{
      this.campeonatoForm.reset({
        regional:this.regional
      });
      this.modalType="Agregar";
    }
  }


  

  closeModal() {
    this.campeonatoForm.reset({
      regional:this.regional
    });
    this.clickClose.emit(true);
  }

  mostrarVarCampeonato() {
    
  }

  addEditCampeonato() {


   

    if (this.selectedCampeonato) {


      this.campeonatoService.actualizarCampeonato(this.campeonatoForm.value).subscribe(
        {
          next: (dato) => {

            this.clickAddEdit.emit(dato);
            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'La campeonato ha sido actualizada con exito', life: 3000 });
            this.closeModal();
          }, error: (error) => {
            console.log("ERROR AL GUARDAR EL EVENTO"+error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la actualizacion de campeonato', life: 3000 });

          },
          complete: () => {
            console.log('Completo al actualizar');

          }
        });


    }
    else {

    

      this.campeonatoService.agregarCampeonato(this.campeonatoForm.value).subscribe(
        {
          next: (dato) => {

           
            this.clickAddEdit.emit(dato);

            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'El campeonato ha sido agregada con exito', life: 3000 });

            this.closeModal()
            
          }, error: (error) => {
            console.log(error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la campeonato', life: 3000 });

          },
          complete: () => {
            console.log('Completo el agregar');

          }

        }
      )

    }


  }

 
selectFile(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];

      
      
      this.currentFile = file;

      this.fileName = this.currentFile.name;
      console.log(this.fileName);
      this.campeonatoForm.controls['ruta'].setValue(this.fileName ? this.fileName : '');
      /*** para mostrar antes de enviar y guardar */

      this.preview = '';

      const reader = new FileReader();

      reader.onload = (e: any) => {
  
        this.preview = e.target.result;
      };

      reader.readAsDataURL(this.currentFile);

      //**** */
    } else {
      this.fileName = '';
    }
  }


}

