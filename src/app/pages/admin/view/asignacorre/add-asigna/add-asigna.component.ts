import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

import { EventoAsignacionService } from 'src/app/service/evento-asignacion.service';
import system from 'src/app/service/helpersys';
import { AsignacionService } from 'src/app/service/asignacion.service';
import { Asignacion } from 'src/app/domain/asignacion';

@Component({
  selector: 'app-add-asigna',
  templateUrl: './add-asigna.component.html',
  styleUrls: ['./add-asigna.component.css']
})
export class AddAsignaComponent  implements OnInit, OnChanges {
  @Input() displayAddModal: boolean = true;
  @Input() selectedInscripto:any=null;
  
  
  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clickAdd: EventEmitter<any> = new EventEmitter<any>();
  

  modalType="Ajustar";

  user:any=null;
  
  fecha = new Date();

  usuario = {
    idusuario: 0,
    enabled:true
  }
  
  asignacion={
    idasignacion: system,
    nomasignacion: '',
  };
  persona={
    nombre:'',
    apellido:'',
  }
  eventoActivo:any=null;

  nombreCorredor='';

  corredor={
    idcorredor: system,
    persona:this.persona
  };
 
  eventoAsignacionForm = this.fb.group({
    ideventoAsignacion:[0],
    fecha: [this.fecha, Validators.required],
    evento: [this.eventoActivo],
    corredor: [this.corredor],
    asignacion: [this.asignacion],
    puntaje: [0],
    cantidad: [0],
  });

  asignaciones:Asignacion[]=[];
  disableCarga=false;
  displayCantidad=false;
   
  constructor(private fb: FormBuilder,
    private messageService: MessageService,
    private eventoAsignacionService: EventoAsignacionService,
    private asignacionService:AsignacionService
   
    ) { }
    
  ngOnChanges(changes: SimpleChanges): void {
 
      this.eventoAsignacionForm.reset({
    
        fecha:this.fecha,
        evento:this.eventoActivo,
        corredor:this.corredor,
        asignacion:this.asignacion,
        puntaje:0,
        cantidad:0

      });
      this.modalType="Agregar";
  
      
  }

  ngOnInit(): void {

    this.eventoAsignacionForm.get('asignacion')?.valueChanges.subscribe(value => {
      if (value?.idasignacion==1) {
        this.displayCantidad = false;
        this.eventoAsignacionForm.get('puntaje')?.setValue(this.selectedInscripto.puntajeaux*2);
      } else if (value?.idasignacion==2) {
        this.displayCantidad = true;
        this.eventoAsignacionForm.get('puntaje')?.setValue(this.selectedInscripto.puntajeaux+
          this.eventoAsignacionForm.value.cantidad);
        
      } else {
        this.displayCantidad = true;
        this.eventoAsignacionForm.get('puntaje')?.setValue(
          this.selectedInscripto.puntajeaux + this.eventoAsignacionForm.get('cantidad')?.value);
      }
       
    });
    
    this.asignacionService.listarAsignaciones().subscribe(
      {
        next: (data) => {
          this.asignaciones = data;
          this.asignacion=data[0];
          //console.log('Asignacion:', this.asignacion);
          
        },
        error: (error) => {
          console.error('Error al obtener la asignacion:', error);
        }
      }
    );
    
  }
  
  closeModal() {
    this.eventoAsignacionForm.reset();
    this.clickClose.emit(true);
  }

  addEventoAsignacion() {
    this.disableCarga=true;
   
    this.eventoAsignacionForm.controls['ideventoAsignacion'].setValue(this.selectedInscripto.id);
    this.eventoAsignacionForm.controls['asignacion'].setValue(this.asignacion);
    

this.eventoAsignacionService.agregarEventoAsignacion(this.eventoAsignacionForm.value).subscribe(
        {
          next: (dato) => {
            
           
            this.clickAdd.emit(dato);
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

