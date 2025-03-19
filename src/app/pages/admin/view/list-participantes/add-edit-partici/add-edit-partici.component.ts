import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MessageService } from 'primeng/api';

import { ParticipanteService } from 'src/app/service/participante.service';
import { Inscriptos } from 'src/app/domain/custom/inscriptos';
import { DorsalService } from 'src/app/service/dorsal.service';
import { Dorsal } from 'src/app/domain/dorsal';


@Component({
  selector: 'app-add-edit-partici',
  templateUrl: './add-edit-partici.component.html',
  styleUrls: ['./add-edit-partici.component.css']
})
export class AddEditParticiComponent  implements OnInit, OnChanges {
  fecha =new Date();
  @Input() displayAddEditModal: boolean = true;
  @Input() selectedInscripto: Inscriptos = {
    id: 0,
    fecha: this.fecha,
    ci: '',
    corredor: '',
    sexo: 0,
    fecnac: this.fecha,
    telefono: '',
    ciudad: '',
    pais: '',
    club: '',
    categoria: '',
    codigo: '',
    km: 0,
    acobrar: 0,
    pagado: 0,
    dorsal: 0,
    nrogiro: '',
    chip: '',
    sex: ''
  };

  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  

  modalType="Asignar";
  dorsal:Dorsal={
    iddorsal: 0,
    chip: '',
    color: '',
    activo: false
  };
  
   
  constructor(
    private messageService: MessageService,
    private participanteService:ParticipanteService,
    private dorsalService:DorsalService

  ) { }

  ngOnChanges(changes: SimpleChanges): void {
      this.modalType="Asignar";
  }

  ngOnInit(): void {
    
  }
  
  closeModal() {
    //this.selectedInscripto.dorsal=0;
    this.clickClose.emit(true);
  }

  addDorsal() {
    if (this.dorsal.activo){

      this.participanteService.actuaParticiDorsal(this.selectedInscripto).subscribe(
      
        {
          next: (dato) => {
            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'El dorsal ha sido asignado con exito', life: 3000 });
            this.clickClose.emit(true);
            
          }, error: (error) => {
            console.log(error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar el dorsal', life: 3000 });

          },
          complete: () => {
            console.log('Completo el asignar Dorsal');

          }

        }
      );
    }
  }

  
  focusOutFunction(){ 
       
    const iddorsal= this.selectedInscripto.dorsal;
    
    this.dorsalService.obtenerDorsal(iddorsal).subscribe({
    
      next: (dato) => {
        
        if (dato){
          //console.log(dato);
          this.dorsal=dato;
          this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'Dorsal encontrado', life: 3000 });
        }else{
          this.messageService.add({ severity: 'info', summary: 'Informacion', detail: 'No se a encontrado Nro de Dorsal ', life: 3000 });
       }

      }, error: (error) => {
        console.log(error);
        this.dorsal={
          iddorsal: 0,
          chip: '',
          color: '',
          activo: false
        };
        this.selectedInscripto.dorsal=0;
        this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al buscar el dorsal', life: 3000 });
    },
      complete: () => {
        console.log('Completo el busqueda de Dorsal');

      }
    });
    
  
} 

 

  
}
