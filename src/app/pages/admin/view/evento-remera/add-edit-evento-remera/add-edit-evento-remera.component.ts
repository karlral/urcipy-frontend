import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';

import { EventoRemeraService } from 'src/app/service/evento-remera.service';
import { EventoService } from 'src/app/service/evento.service';
import { RemeraService } from 'src/app/service/remera.service';

@Component({
  selector: 'app-add-edit-evento-remera',
  templateUrl: './add-edit-evento-remera.component.html',
  styleUrls: ['./add-edit-evento-remera.component.css']
})
export class AddEditEventoRemeraComponent  implements OnInit, OnChanges {
  @Input() displayAddEditModal: boolean = true;
  @Input() selectedEventoRemera:any=null;

  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clickAddEdit: EventEmitter<any> = new EventEmitter<any>();

  modalType="Agregar";

  
  
  evento={
    idevento: 0,
    
  };
  remera={
    idremera: 0,
    
  };
  eventos:any[]=[];
  remeras:any[]=[];

  eventoRemeraForm = this.fb.group({
    ideventoRemera:[null],
    evento: [this.evento],
    remera:[this.remera],
   
  });
  
  

  constructor(private fb: FormBuilder,
    private messageService: MessageService,
    private eventoRemeraService: EventoRemeraService,
    private eventoService: EventoService,
    private remeraService: RemeraService

  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    

    if (this.selectedEventoRemera){
      this.modalType="Guardar";

      this.eventoRemeraForm.patchValue(this.selectedEventoRemera);
      console.log(this.selectedEventoRemera);
    
    }else{
      
      this.eventoRemeraForm.reset({
        evento:this.evento,
        remera:this.remera,

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

  this.remeraService.listarRemeraes().subscribe(
    {next:  (datos: any) => {
      this.remeras=datos;
      this.remera = datos[0];

    }, error:(error) => {
      console.log(error);
      this.messageService.add({
        severity: "error",
        summary: "Remera",
        detail: "Error al cargar el Remera"
      }
    );
    },
    complete: () => {
      console.log('Completo remeras');

    }
  });

  }
  

  closeModal() {
    this.eventoRemeraForm.reset();
    this.clickClose.emit(true);
  }

  mostrarVarEventoRemera() {
    
  }

  addEditEventoRemera() {

    console.log(this.eventoRemeraForm.value);

    if (this.selectedEventoRemera){

      this.eventoRemeraService.actualizarEventoRemera(this.eventoRemeraForm.value).subscribe(
        {
          next: (dato) => {

            this.clickAddEdit.emit(dato);
            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'La evento ha sido actualizada con exito', life: 3000 });
            this.closeModal();
          }, error: (error) => {
            console.log("ERROR AL GUARDAR EL EventoRemera"+error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la actualizacion de evento', life: 3000 });

          },
          complete: () => {
            console.log('Completo al actualizar EventoRemera');

          }
        });


    }
    else {

      this.eventoRemeraService.agregarEventoRemera(this.eventoRemeraForm.value).subscribe(
        {
          next: (dato) => {
  
            this.clickAddEdit.emit(dato);

            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'El eventoRemera ha sido agregada con exito', life: 3000 });

            this.closeModal()
            
          }, error: (error) => {
            console.log(error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la eventoRemera', life: 3000 });

          },
          complete: () => {
            console.log('Completo el agregar');

          }

        }
      );
    }

  }

  

}
