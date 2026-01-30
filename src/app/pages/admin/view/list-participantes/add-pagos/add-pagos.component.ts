import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MessageService } from 'primeng/api';

import { ParticipanteService } from 'src/app/service/participante.service';
import { Inscriptos } from 'src/app/domain/custom/inscriptos';
import { Remera } from 'src/app/domain/remera';



@Component({
  selector: 'app-add-pagos',
  templateUrl: './add-pagos.component.html',
  styleUrls: ['./add-pagos.component.css']
})
export class AddPagosComponent implements OnInit, OnChanges {
  fecha =new Date();
  @Input() displayPagosModal: boolean = true;
  @Input() tamanos: Remera[] = [];
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
    sex: '',
    tamano: 0,
    tamanoc: '',
    pag: '',
    kit: 0,
    kittipo: '',
    tanda: 0,
    orden: 0,
    horario: '',
    tandac: ''
  };
  pagos: any[] = [];
  kits: any[] = [];

  @Output() clickPagosClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  

  modalType="Confirmar";
  
  

  constructor(
    private messageService: MessageService,
    private participanteService:ParticipanteService

  ) { }

  ngOnChanges(changes: SimpleChanges): void {
      this.modalType="Confirmar";
  }

  ngOnInit(): void {
    this.pagos = [
      { label: 'SI RETIRADO', value: 2 },
      { label: 'SI', value: 1 },
      { label: 'NO', value: 0 }
    ];
    this.kits = [
      { label: 'SI', value: 1 },
      { label: 'NO', value: 0 }
    ];

      
  }
  
  closePagosModal() {
    //this.selectedInscripto.dorsal=0;
    this.clickPagosClose.emit(true);
  }

  addPagos() {
    

      this.participanteService.actuaParticiPagos(this.selectedInscripto).subscribe(
      
        {
          next: (dato) => {
            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'El registro de pago ha sido asignado con exito', life: 3000 });
            this.clickPagosClose.emit(true);
            
          }, error: (error) => {
            console.log(error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar el registro de pago', life: 3000 });

          },
          complete: () => {
            console.log('Completo el asignar Pagos');

          }

        }
      );
    
  }

  
  

 

  
}
