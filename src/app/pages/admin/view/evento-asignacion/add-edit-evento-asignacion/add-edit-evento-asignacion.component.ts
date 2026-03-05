import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';

import { EventoAsignacionService } from 'src/app/service/evento-asignacion.service';
import { EventoService } from 'src/app/service/evento.service';
import { AsignacionService } from 'src/app/service/asignacion.service';

@Component({
  selector: 'app-add-edit-evento-asignacion',
  templateUrl: './add-edit-evento-asignacion.component.html',
  styleUrls: ['./add-edit-evento-asignacion.component.css']
})
export class AddEditEventoAsignacionComponent  implements OnInit, OnChanges {
  @Input() displayAddEditModal: boolean = true;
  @Input() selectedEventoAsignacion:any=null;

  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clickAddEdit: EventEmitter<any> = new EventEmitter<any>();

  modalType="Agregar";

  
  
  evento={
    idevento: 0,
    
  };
  asignacion={
    idasignacion: 0,
    
  };
  eventos:any[]=[];
  asignacions:any[]=[];

  eventoAsignacionForm = this.fb.group({
    ideventoAsignacion:[null],
    evento: [this.evento],
    asignacion:[this.asignacion],
   
  });
  
  

  constructor(private fb: FormBuilder,
    private messageService: MessageService,
    private eventoAsignacionService: EventoAsignacionService,
    private eventoService: EventoService,
    private asignacionService: AsignacionService

  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    

    if (this.selectedEventoAsignacion){
      this.modalType="Guardar";

      this.eventoAsignacionForm.patchValue(this.selectedEventoAsignacion);
      console.log(this.selectedEventoAsignacion);
    
    }else{
      
      this.eventoAsignacionForm.reset({
        evento:this.evento,
        asignacion:this.asignacion,

      });

      this.modalType="Agregar";
    }

  }

  ngOnInit(): void {


    this.eventoService.listarEventosActivosPub().subscribe(
      {next:  (datos: any) => {
        this.eventos=datos;
        this.evento = datos[0];

      }, error:(error) => {
        console.log(error);
        this.messageService.add({
          severity: "error",
          summary: "Evento",
          detail: "Error al cargar el Evento"
        }
      );
      },
      complete: () => {
        console.log('Completo eventos');

      }
    
  });

  this.asignacionService.listarAsignaciones().subscribe(
    {next:  (datos: any) => {
      this.asignacions=datos;
      this.asignacion = datos[0];

    }, error:(error) => {
      console.log(error);
      this.messageService.add({
        severity: "error",
        summary: "Asignacion",
        detail: "Error al cargar el Asignacion"
      }
    );
    },
    complete: () => {
      console.log('Completo asignacions');

    }
  });

  }
  

  closeModal() {
    this.eventoAsignacionForm.reset();
    this.clickClose.emit(true);
  }

  mostrarVarEventoAsignacion() {
    
  }

  addEditEventoAsignacion() {

    console.log(this.eventoAsignacionForm.value);

    if (this.selectedEventoAsignacion){

      this.eventoAsignacionService.actualizarEventoAsignacion(this.eventoAsignacionForm.value).subscribe(
        {
          next: (dato) => {

            this.clickAddEdit.emit(dato);
            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'La evento ha sido actualizada con exito', life: 3000 });
            this.closeModal();
          }, error: (error) => {
            console.log("ERROR AL GUARDAR EL EventoAsignacion"+error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la actualizacion de evento', life: 3000 });

          },
          complete: () => {
            console.log('Completo al actualizar EventoAsignacion');

          }
        });


    }
    else {

      this.eventoAsignacionService.agregarEventoAsignacion(this.eventoAsignacionForm.value).subscribe(
        {
          next: (dato) => {
  
            this.clickAddEdit.emit(dato);

            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'El eventoAsignacion ha sido agregada con exito', life: 3000 });

            this.closeModal()
            
          }, error: (error) => {
            console.log(error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la eventoAsignacion', life: 3000 });

          },
          complete: () => {
            console.log('Completo el agregar');

          }

        }
      );
    }

  }

  

}
