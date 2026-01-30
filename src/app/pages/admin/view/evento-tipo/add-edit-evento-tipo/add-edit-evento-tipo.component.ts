import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';

import { EventoTipoService } from 'src/app/service/evento-tipo.service';
import { EventoService } from 'src/app/service/evento.service';
import { TipoService } from 'src/app/service/tipo.service';

@Component({
  selector: 'app-add-edit-evento-tipo',
  templateUrl: './add-edit-evento-tipo.component.html',
  styleUrls: ['./add-edit-evento-tipo.component.css']
})
export class AddEditEventoTipoComponent  implements OnInit, OnChanges {
  @Input() displayAddEditModal: boolean = true;
  @Input() selectedEventoTipo:any=null;

  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clickAddEdit: EventEmitter<any> = new EventEmitter<any>();

  modalType="Agregar";

  
  
  evento={
    idevento: 0,
    
  };
  tipo={
    idtipo: 0,
    
  };
  eventos:any[]=[];
  tipos:any[]=[];

  eventoTipoForm = this.fb.group({
    ideventoTipo:[null],
    evento: [this.evento],
    tipo:[this.tipo],
   
  });
  
  

  constructor(private fb: FormBuilder,
    private messageService: MessageService,
    private eventoTipoService: EventoTipoService,
    private eventoService: EventoService,
    private tipoService: TipoService

  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    

    if (this.selectedEventoTipo){
      this.modalType="Guardar";

      this.eventoTipoForm.patchValue(this.selectedEventoTipo);
      console.log(this.selectedEventoTipo);
    
    }else{
      
      this.eventoTipoForm.reset({
        evento:this.evento,
        tipo:this.tipo,

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

  this.tipoService.listarTipoes().subscribe(
    {next:  (datos: any) => {
      this.tipos=datos;
      this.tipo = datos[0];

    }, error:(error) => {
      console.log(error);
      this.messageService.add({
        severity: "error",
        summary: "Tipo",
        detail: "Error al cargar el Tipo"
      }
    );
    },
    complete: () => {
      console.log('Completo tipos');

    }
  });

  }
  

  closeModal() {
    this.eventoTipoForm.reset();
    this.clickClose.emit(true);
  }

  mostrarVarEventoTipo() {
    
  }

  addEditEventoTipo() {

    console.log(this.eventoTipoForm.value);

    if (this.selectedEventoTipo){

      this.eventoTipoService.actualizarEventoTipo(this.eventoTipoForm.value).subscribe(
        {
          next: (dato) => {

            this.clickAddEdit.emit(dato);
            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'La evento ha sido actualizada con exito', life: 3000 });
            this.closeModal();
          }, error: (error) => {
            console.log("ERROR AL GUARDAR EL EventoTipo"+error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la actualizacion de evento', life: 3000 });

          },
          complete: () => {
            console.log('Completo al actualizar EventoTipo');

          }
        });


    }
    else {

      this.eventoTipoService.agregarEventoTipo(this.eventoTipoForm.value).subscribe(
        {
          next: (dato) => {
  
            this.clickAddEdit.emit(dato);

            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'El eventoTipo ha sido agregada con exito', life: 3000 });

            this.closeModal()
            
          }, error: (error) => {
            console.log(error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la eventoTipo', life: 3000 });

          },
          complete: () => {
            console.log('Completo el agregar');

          }

        }
      );
    }

  }

  

}
