import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MessageService } from 'primeng/api';

import { ParticipanteService } from 'src/app/service/participante.service';
import { Inscripto } from 'src/app/domain/custom/inscripto';
import { EventoRemeraService } from 'src/app/service/evento-remera.service';



@Component({
  selector: 'app-add-pagos',
  templateUrl: './add-pagos.component.html',
  styleUrls: ['./add-pagos.component.css']
})
export class AddPagosComponent implements OnInit, OnChanges {
  fecha = new Date();
  @Input() displayPagosModal: boolean = true;
  @Input() idevento!: number;
  @Input() selectedInscripto: Inscripto = {
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
    catalternativo: '',
    edad: 0,
    tanda: 0,
    orden: 0,
    horario: '',
    tandac: '',
    logoclub: '',
    logoevento: ''
  };
  pagos: any[] = [];
  kits: any[] = [];

  @Output() clickPagosClose: EventEmitter<boolean> = new EventEmitter<boolean>();


  modalType = "Confirmar";

  tamanos = [];
  displayRemera: boolean = false;



  constructor(
    private messageService: MessageService,
    private participanteService: ParticipanteService,
    private eventoRemeraService: EventoRemeraService

  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.modalType = "Confirmar";
    if (this.idevento && this.idevento > 0) {
      this.loadTamanos();
    }
  }

  loadTamanos() {
    this.eventoRemeraService.listarRemerasEvento(this.idevento).subscribe(
      {
        next: (dato: any) => {
          this.tamanos = dato;
          this.displayRemera = this.tamanos.length > 0;
          this.tamanos.sort((a: any, b: any) => a.idremera - b.idremera);
        },
        error: (error) => {
          console.log(error);
          this.messageService.add({
            severity: "error",
            summary: "Evento Remera",
            detail: "Error al cargar el evento remera"
          });
        }
      });
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

    //     this.tamanos = [
    //   { label: 'Sin Remera', value: 0 },
    //   { label: 'Tamaño P', value: 1 },
    //   { label: 'Tamaño M', value: 2 },
    //   { label: 'Tamaño G', value: 3 },
    //   { label: 'Tamaño XG', value: 4 },
    //   { label: 'Tamaño XXG', value: 5 }

    // ];


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
