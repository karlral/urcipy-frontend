import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MessageService } from 'primeng/api';

import { ParticipanteService } from 'src/app/service/participante.service';
import { Inscriptos } from 'src/app/domain/custom/inscriptos';
import { Club } from 'src/app/domain/club';
import { Partici } from 'src/app/domain/custom/partici';
import { Pais } from 'src/app/domain/pais';
import { PaisService } from 'src/app/service/pais.service';
import { ClubService } from 'src/app/service/club.service';
import { EventoTipoService } from 'src/app/service/evento-tipo.service';


@Component({
  selector: 'app-add-edit-participante',
  templateUrl: './add-edit-participante.component.html',
  styleUrls: ['./add-edit-participante.component.css']
})
export class AddEditParticipanteComponent implements OnInit, OnChanges {
  fecha = new Date();
  @Input() displayAddEditParticipanteModal: boolean = true;
  @Input() idevento: number = 0;
  @Input() idmodalidad: number = 0;
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
    kittipo: ''
  };
  @Output() clickUpdate: EventEmitter<Object> = new EventEmitter<Object>();
  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();


  modalType = "Guardar";


  fechaant = new Date(2000, 0, 1);

  clubes: Club[] = [];

  partici: Partici = {
    idparticipante: 0,
    idevento: 0,
    idcorredor: 0,
    idcategoria: 0,
    idclub: 1,
    ci: '',
    tamano: 5,
    telefono: '',
    nombre: '',
    apellido: '',
    fecnac: this.fechaant,
    sexo: 1,
    nacionalidad: "Paraguaya",
    tipocat: 3,
    modificar: false,
    regcorredor: true
  };

  tipos: any[] = [];
  paises: Pais[] = [];
  

  oldtipocat = 0;
  realizoclick = false;


  constructor(
    private messageService: MessageService,
    private participanteService: ParticipanteService,
    private clubService: ClubService,
    private paisService: PaisService,
    private eventoTipoService: EventoTipoService,

  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.modalType = "Modificar";
    this.partici.idparticipante = this.selectedInscripto.id;
    if (this.partici.idparticipante != 0) {
      this.cargarParticipante();
    }
    if (this.idevento != 0) {
      this.cargarTipoEvento(); 
    }

    if (this.idmodalidad != 0) {
      this.cargarClubes();
    }
  }

  cargarParticipante() {
    this.participanteService.obtenerPartici(this.partici.idparticipante).subscribe(
      {
        next: (dato) => {
          this.partici = dato;

          const fecnac= new Date(dato.fecnac);
          this.partici.fecnac=fecnac;
      
       //   console.log("partici");
        //  console.log(this.partici);

        }, error: (error) => {
          console.log(error);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al cargar el participante' });
        },
        complete: () => {
          console.log('Completo cargar participante');
        }
      }
    );
  }

  cargarTipoEvento() {
    this.eventoTipoService.listarTiposEvento(this.idevento).subscribe(
        {
          next: (dato: any) => {
            this.tipos = dato;
          //  console.log("tipos evento");
          //  console.log(this.tipos);
          },
          error: (error) => {
            console.log(error);
            this.messageService.add({
              severity: "error",
              summary: "Evento Tipo",
              detail: "Error al cargar el evento tipo"
            });
          },
          complete: () => console.info('completo tipos evento')
        });

  }

  cargarClubes() {
this.clubService.publistarClube(this.idmodalidad).subscribe(
      {
        next: (dato: any) => {
          this.clubes = dato;

        },
        error: (error) => {
          console.log(error);
          this.messageService.add({
            severity: "error",
            summary: "Club",
            detail: "Error al cargar el Club"
          });
        },
        complete: () => console.info('completo clubes')
      });
  }

  ngOnInit(): void {

   
    

    this.paisService.publistarPaises().subscribe(
      (dato: any) => {
        this.paises = dato;

      }, (error) => {
        console.log(error);
        this.messageService.add({
          severity: "error",
          summary: "Pais",
          detail: "Error al cargar el Pais"
        });
      }
    );
  }

  closeModal() {
    //this.selectedInscripto.dorsal=0;
    this.clickClose.emit(true);
  }

  updateData() {
    if (!this.realizoclick) {
      this.realizoclick = true;
      

      this.participanteService.actualizaPartici(this.partici).subscribe(
        {
          next: (dato) => {
            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'El participante ha sido actualizado con exito', life: 3000 });
            this.clickUpdate.emit(dato);
            this.clickClose.emit(true);

          }, error: (error) => {
            console.log(error);
            this.messageService.add({ severity: 'success', summary: 'Error', detail: 'Error al guardar el participante', life: 3000 });

          },
          complete: () => {
            console.log('Completo el actualizar Participante');
          }

        }
      );
    }
  }





  cargarCategoria(cat: any) {
    this.partici.idcategoria = cat.idcategoria;
    this.partici.tipocat = cat.tipo;

  }
  

}
