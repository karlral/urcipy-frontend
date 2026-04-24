import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/domain/evento';
import { Datasys } from 'src/app/service/datasys';
import { EventoService } from 'src/app/service/evento.service';
import baserUrl from 'src/app/service/helper';
import { ActivatedRoute } from '@angular/router';

import { MessageService } from "primeng/api";
import { ParticipanteService } from 'src/app/service/participante.service';
import { CorredorService } from 'src/app/service/corredor.service';
import { Corredorbus } from 'src/app/domain/custom/corredorbus';
import { el, id } from 'date-fns/locale';
import { EventoRemeraService } from 'src/app/service/evento-remera.service';
import { EventoTipoService } from 'src/app/service/evento-tipo.service';
import { Tipo } from 'src/app/domain/tipo';
import { Remera } from 'src/app/domain/remera';
import { Club } from 'src/app/domain/club';
import { ClubService } from 'src/app/service/club.service';


@Component({
  selector: 'app-eventobusrun',
  templateUrl: './eventobusrun.component.html',
  styleUrls: ['./eventobusrun.component.css'],
  providers: [Datasys, MessageService]
})
export class EventobusrunComponent implements OnInit {
  idevento!: number;
  mediaLocation = `${baserUrl}/media/`;

  selectedCorredor: any = null;
  displaySearch = false;

  evento: any;


  participante: any;



  ordenes: { label: string, value: number }[] = [
    { label: 'Primera', value: 1 }
  ];

  clubes: Club[] = [];

  tipos: Tipo[] = [];
  tamanos: Remera[] = [];
  tamano = 3;
  ordenevento = '';
  ci: string = '';
  fecha: Date = new Date();

  corredor: any = {
    idcorredor: 0,
    persona: {
      idpersona: 0,
      tamano: 3,
    },
    categoria: {
      idcategoria: 0
    },
    modificar: false,
    club: {
      idclub: 0
    },
    tipocat: 0
  }

  corredorbus: Corredorbus = {
    idcorredor: 0,
    ci: '',
    corredor: '',
    fecnac: this.fecha,
    sexo: 0,
    telefono: '',
    categoria: '',
    club: '',
    nacionalidad: '',
    ciudad: '',
    pais: '',
    carnetfpc: 0,
    puntua: 0,
    tamano: 3,
    idpersona: 0,
    idcategoria: 0,
    idclub: 0,
    modificar: false,
    verificar: 0,
    tipocat: 0
  };
  selectedTerminos: boolean = false;
  inscripto = 0;
  edad = 0;
  idmodalidad = 2;
  organizador = 2;
  modalidad = 'Elige el Club';
  tipo = 3;
  displayRemera: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
    private eventoService: EventoService,
    private datasys: Datasys,
    private messageService: MessageService,
    private participanteService: ParticipanteService,
    private corredorService: CorredorService,
    private eventoTipoService: EventoTipoService,
    private eventoRemeraService: EventoRemeraService,
    private clubService: ClubService,


  ) { }

  ngOnInit(): void {
    this.idevento = this.activatedRoute.snapshot.params["idevento"];

    this.eventoService.obtenerEventoPub(this.idevento).subscribe(
      {
        next: (e: Evento) => {
          this.evento = e;

          this.organizador = this.evento.organizador;
          console.log("organizador " + this.organizador);
          console.log(this.evento);
          if (this.organizador == 2) {
            this.modalidad = 'UNIDAD ACADEMICO';

          }

          this.datasys.getOrdenes().then(data => {
            this.ordenes = data;
            this.ordenevento = this.ordenes[this.evento.orden - 1].label
          });
        },
        error: (error) => {
          console.log(error);

        },
        complete: () => {
          console.info('completo evento')
          this.clubService.publistarClub(this.idmodalidad, this.organizador).subscribe(
            {
              next: (dato: any) => {
                //console.log("clubes");
                //console.log(dato);      
                this.clubes = dato.sort((a: Club, b: Club) => a.nomclub.localeCompare(b.nomclub));
                //console.log(this.clubes);
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

      });
    this.eventoTipoService.listarTiposEvento(this.idevento).subscribe(
      {
        next: (dato: any) => {
          this.tipos = dato;
          //       console.log("tipos evento");
          //     console.log(this.tipos);
          this.tipos.sort((a: any, b: any) => a.idtipo - b.idtipo);
          this.corredorbus.tipocat = this.tipos.length > 0 ? this.tipos[0].idtipo : 0;
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

  hideModal(isClosed: boolean) {
    this.selectedCorredor = null;
    this.displaySearch = isClosed;
    this.inscripto = 0;
  }

  saveParticipante(particpante: any) {
    this.participante = particpante;
    this.inscripto = 1;
  }

  formSubmit() {
    console.log("agregamos el click de " + this.ci + " ID EVENTO " + this.evento.idevento);
    if (this.ci.trim() == '' || this.ci.trim() == null) {

      this.messageService.add({
        severity: "error",
        summary: "Atencion",
        detail: "Complete su Cedula de identidad sin puntos"
      });

      return;
    }
    this.corredor.persona.tamano = this.corredorbus.tamano;
    this.corredor.club.idclub = this.corredorbus.idclub;
    this.corredor.tipocat = this.corredorbus.tipocat;
    console.log(this.corredor)
    this.corredorService.actualizarCorredorRun(this.corredor).subscribe({
      next: (dato: any) => {


      }, error: (error) => {
        console.log(error);
        this.messageService.add({ severity: 'success', summary: 'Error', detail: 'El corredor no se encuentra', life: 3000 });
      },
      complete: () => {
        console.info('completo actualizacion')

        let cip = this.ci.replace(/[^0-9]/g, "");
        this.ci = cip;

        this.participanteService.inscribirPartiCi(this.idevento, this.ci).subscribe(
          (data: any) => {

            this.participante = data;
            this.inscripto = 1;

          }, (error) => {
            console.log(error);

            this.messageService.add({
              key: 'bc',
              severity: "info",
              summary: "Atencion",
              detail: "No se encontro el numero de CI del corredor, complete sus datos."
            });
            this.inscripto = 2;
          });
      }
    });


  }

  focusOutFunction() {

    let cip = this.ci.replace(/[^0-9]/g, "");
    this.ci = cip;

    this.corredorService.pubObtenerCorredorbusCiRun(this.ci).subscribe({
      next: (dato: Corredorbus) => {

        this.corredorbus = dato;
        if (dato != null) {
          const fecnac = new Date(dato.fecnac);
          this.corredorbus.fecnac = fecnac;

          this.corredor.idcorredor = dato.idcorredor;
          this.corredor.categoria.idcategoria = dato.idcategoria;
          this.corredor.persona.idpersona = dato.idpersona;
          this.corredor.persona.tamano = dato.tamano;
          this.corredor.modificar = true;
          this.corredor.club.idclub = dato.idclub;
          this.corredor.tipocat = dato.tipocat;
          console.log(this.corredor);
        }


      }, error: (error) => {
        console.log(error);
        this.messageService.add({ severity: 'success', summary: 'Error', detail: 'El corredor no se encuentra', life: 3000 });

      },
      complete: () => {
        console.log('Completo la busqueda de Corredor');
        if (this.corredorbus == null) {
          this.inscripto = 2;
          this.messageService.add({ severity: 'success', summary: 'Error', detail: 'El corredor no se encuentra', life: 3000 });
        }
      }
    });
  }


  cargarCategoria(cat: any) {
    this.corredor.categoria.idcategoria = cat.idcategoria;

  }
}
