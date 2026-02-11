import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CategoriaService } from 'src/app/service/categoria.service';

import { EventoCategoriaService } from 'src/app/service/evento-categoria.service';
import { EventoService } from 'src/app/service/evento.service';

@Component({
  selector: 'app-add-edit-evento-categoria',
  templateUrl: './add-edit-evento-categoria.component.html',
  styleUrls: ['./add-edit-evento-categoria.component.css']
})
export class AddEditEventoCategoriaComponent  implements OnInit, OnChanges {
  @Input() displayAddEditModal: boolean = true;
  @Input() selectedEventoCategoria:any=null;

  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clickAddEdit: EventEmitter<any> = new EventEmitter<any>();

  modalType="Agregar";

  
  
  evento={
    idevento: 0,
    
  };
  categoria={
    idcategoria: 0,
    
  };
  eventos:any[]=[];
  categorias:any[]=[];

  eventoCategoriaForm = this.fb.group({
    ideventoCategoria:[null],
    evento: [this.evento],
    categoria:[this.categoria],
   
  });
  
  

  constructor(private fb: FormBuilder,
    private messageService: MessageService,
    private eventoCategoriaService: EventoCategoriaService,
    private eventoService: EventoService,
    private categoriaService: CategoriaService

  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    

    if (this.selectedEventoCategoria){
      this.modalType="Guardar";

      this.eventoCategoriaForm.patchValue(this.selectedEventoCategoria);
      console.log(this.selectedEventoCategoria);
    
    }else{
      
      this.eventoCategoriaForm.reset({
        evento:this.evento,
        categoria:this.categoria,

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
  this.categoriaService.listarCategoriaActivo().subscribe(
    {next:  (datos: any) => {
      this.categorias=datos;
      this.categoria = datos[0];

    }, error:(error) => {
      console.log(error);
      this.messageService.add({
        severity: "error",
        summary: "Categoria",
        detail: "Error al cargar la Categoria"
      }
    );
    },
    complete: () => {
      console.log('Completo categorias');

    }
  });

  

  }
  

  closeModal() {
    this.eventoCategoriaForm.reset();
    this.clickClose.emit(true);
  }

  mostrarVarEventoCategoria() {
    
  }

  addEditEventoCategoria() {

    console.log(this.eventoCategoriaForm.value);

    if (this.selectedEventoCategoria){

      this.eventoCategoriaService.actualizarEventoCategoria(this.eventoCategoriaForm.value).subscribe(
        {
          next: (dato) => {

            this.clickAddEdit.emit(dato);
            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'La evento ha sido actualizada con exito', life: 3000 });
            this.closeModal();
          }, error: (error) => {
            console.log("ERROR AL GUARDAR EL EventoCategoria"+error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la actualizacion de evento', life: 3000 });

          },
          complete: () => {
            console.log('Completo al actualizar EventoCategoria');

          }
        });


    }
    else {

      this.eventoCategoriaService.agregarEventoCategoria(this.eventoCategoriaForm.value).subscribe(
        {
          next: (dato) => {
  
            this.clickAddEdit.emit(dato);

            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'El eventoCategoria ha sido agregada con exito', life: 3000 });

            this.closeModal()
            
          }, error: (error) => {
            console.log(error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar la eventoCategoria', life: 3000 });

          },
          complete: () => {
            console.log('Completo el agregar');

          }

        }
      );
    }

  }

  

}
