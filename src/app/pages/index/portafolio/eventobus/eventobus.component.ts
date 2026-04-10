import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/domain/evento';
import { Datasys } from 'src/app/service/datasys';
import { EventoService } from 'src/app/service/evento.service';
import baserUrl from 'src/app/service/helper';
import { ActivatedRoute } from '@angular/router';

import { MessageService } from "primeng/api";
import { Club } from 'src/app/domain/club';
import { ParticipanteService } from 'src/app/service/participante.service';
import { CorredorService } from 'src/app/service/corredor.service';
import { EventoRemeraService } from 'src/app/service/evento-remera.service';
import { Corredorbus } from 'src/app/domain/custom/corredorbus';
import { Remera } from 'src/app/domain/remera';
import { ClubService } from 'src/app/service/club.service';
import { Partici } from 'src/app/domain/custom/partici';

@Component({
  selector: 'app-eventobus',
  templateUrl: './eventobus.component.html',
  styleUrls: ['./eventobus.component.css'],
  providers: [Datasys, MessageService]
})
export class EventobusComponent implements OnInit {
  idevento!: number;
  mediaLocation = `${baserUrl}/media/`;
  selectedCorredor: any = null;
  displaySearch = false;

  evento: any = {
  };
  rutagrande = '';


  ordenes: { label: string, value: number }[] = [
    { label: 'Primera', value: 1 }
  ];

  ordenevento = '';
  selectedTerminos: boolean = false;
  inscripto = 0; // 0 no inscripto, 1 inscripto, 2 editar datos
  inscriptoparticipante: any = null;

  fecha: Date = new Date();
  tamanos: Remera[] = [];
  displayRemera: boolean = false;
  displayVerificar: boolean = false;
  displayBotonSubirCat: boolean = false;
  tipos: any[] = [];
  idmodalidad = 1;
 
  oldtipocat = 0;

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
    tamano: 5,
    idpersona: 0,
    idcategoria: 0,
    verificar: 0,
    idclub: 0,
    tipocat: 0,
    modificar: false
  };


  clubes: Club[] = [];

  partici: Partici = {
    idparticipante: 0,
    idevento: 0,
    idcorredor: 0,
    idcategoria: 0,
    idclub: 0,
    ci: '',
    tamano: 0,
    telefono: ''
  };

  constructor(private activatedRoute: ActivatedRoute,
    private eventoService: EventoService,
    private datasys: Datasys,
    private messageService: MessageService,
    private participanteService: ParticipanteService,
    private corredorService: CorredorService,
    private eventoRemeraService: EventoRemeraService,
    private clubService: ClubService,

  ) { }

  ngOnInit(): void {
    this.idevento = this.activatedRoute.snapshot.params["idevento"];

    this.eventoService.obtenerEventoPub(this.idevento).subscribe(
      {
        next: (e: Evento) => {
          this.evento = e;
          this.rutagrande = this.evento.club.rutagrande;

          this.datasys.getOrdenes().then(data => {
            this.ordenes = data;
            this.ordenevento = this.ordenes[this.evento.orden - 1].label
          });
        },
        error: (error) => {
          console.log(error);

        },
        complete: () => console.info('completo evento')
      });

    this.eventoRemeraService.listarRemerasEvento(this.idevento).subscribe(
      {
        next: (dato: any) => {
          this.tamanos = dato;
          this.displayRemera = this.tamanos.length > 0;
          this.corredorbus.tamano = 5;

          this.tamanos.sort((a, b) => a.idremera - b.idremera);

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

  hideModal(isClosed: boolean) {
    this.selectedCorredor = null;
    this.displaySearch = isClosed;
    this.inscripto = 0;
  }

 

  formSubmit() {

    console.log("agregamos el click de " + this.partici.ci + " ID EVENTO " + this.evento.idevento);
    if (this.partici.ci.trim() == '' || this.partici.ci.trim() == null) {

      this.messageService.add({
        severity: "error",
        summary: "Atencion",
        detail: "Complete su Cedula de identidad sin puntos"
      });

      return;
    }

    this.participanteService.inscribirPartici(this.partici).subscribe(
      {
        next: (data: any) => {

          //this.router.navigate(['eventobus']);
          this.inscriptoparticipante = data;
          this.inscripto = 1;


        }, error: (error) => {
          console.log(error);

          this.messageService.add({

            severity: "info",
            summary: "Atencion",
            detail: "No se encontro el numero de CI del corredor, complete sin puntos o contactese con la organizacion del evento al numero: " + this.evento.contacto
          });

        }, complete: () => {
          console.log('completo inscripcion participante');

         

        }
      });


  }


  onChange(valor: string) {
    console.log(valor);
    this.partici.ci = valor.replace(/[^0-9]/g, "");
   
    if (this.partici.ci.trim() == '' || this.partici.ci.trim() == null) {

      this.messageService.add({
        severity: "error",
        summary: "Atencion",
        detail: "Complete su Cedula de identidad sin puntos"
      });

      return;
    }
    if (this.partici.ci.length >= 6) {

      this.corredorService.pubObtenerCorredorbusxCi(this.partici.ci).subscribe({
        next: (dato: Corredorbus) => {


          this.corredorbus = dato;

          const fecnac = new Date(dato.fecnac);
          this.corredorbus.fecnac = fecnac;

          this.partici.idevento = this.idevento;
          this.partici.idcorredor = dato.idcorredor;
          this.partici.idcategoria = dato.idcategoria;
          this.partici.idclub = dato.idclub;
          this.partici.tamano = dato.tamano;
          this.partici.telefono = dato.telefono;
          
          
          this.oldtipocat = dato.tipocat;


          if (this.corredorbus.modificar) {

            this.messageService.add({ severity: 'info', summary: 'Atencion', detail: 'Verifique sus datos si estan correctos, puede actualizar si lo desea.', life: 3000 });
          }


        }, error: (error) => {
          console.log(error);
          if (this.partici.ci.length == 6){
            console.log('Ci de 6 digitos, no se busca corredor');
          }else{
            this.messageService.add({ severity: 'error', summary: 'Atencion', detail: 'El corredor no se encuentra o contactese con la organizacion del evento al numero: ' + this.evento.contacto, life: 5000 });
          }
        },
        complete: () => {
          console.log('Completo la busqueda de Corredor');

        }
      });
    }
  }

  cargarCategoria(cat: any) {
    this.partici.idcategoria = cat.idcategoria;
    this.partici.tipocat = cat.tipo;

  }
  subirCategoria() {
    if (this.corredorbus.tipocat == 4) {
      this.corredorbus.tipocat = 3;
    } else if (this.corredorbus.tipocat == 3) {
      this.corredorbus.tipocat = 1;
    } else if (this.corredorbus.tipocat == 1) {
      this.corredorbus.tipocat = 2;
    } else if (this.corredorbus.tipocat == 2) {
      this.corredorbus.tipocat = 4;
    }


  }
  revertirCategoria() {
    this.corredorbus.tipocat = this.oldtipocat;
  }


}
