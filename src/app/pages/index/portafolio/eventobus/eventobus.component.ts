import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/domain/evento';
import { Datasys } from 'src/app/service/datasys';
import { EventoService } from 'src/app/service/evento.service';
import baserUrl from 'src/app/service/helper';
import { ActivatedRoute, Router } from '@angular/router';

import { MessageService } from "primeng/api";
import { Club } from 'src/app/domain/club';
import { Regional } from 'src/app/domain/regional';
import { ParticipanteService } from 'src/app/service/participante.service';
import { Participante } from 'src/app/domain/participante';
import { Corredor } from 'src/app/domain/corredor';
import { Usuario } from 'src/app/domain/usuario';
import { Categoria } from 'src/app/domain/categoria';
import { Ciudad } from 'src/app/domain/ciudad';
import { Pais } from 'src/app/domain/pais';
import { Trayecto } from 'src/app/domain/trayecto';
import { Region } from 'src/app/domain/region';
import { Persona } from 'src/app/domain/persona';
import { Modalidad } from 'src/app/domain/modalidad';
import { Corredorbus } from 'src/app/domain/custom/corredorbus';
import { CorredorService } from 'src/app/service/corredor.service';
import { Remera } from 'src/app/domain/remera';
import { Tipo } from 'src/app/domain/tipo';
import { EventoRemeraService } from 'src/app/service/evento-remera.service';
import { EventoTipoService } from 'src/app/service/evento-tipo.service';
import { ClubService } from 'src/app/service/club.service';

@Component({
  selector: 'app-eventobus',
  templateUrl: './eventobus.component.html',
  styleUrls: ['./eventobus.component.css'],
  providers: [Datasys, MessageService]
})
export class EventobusComponent implements OnInit {
  idevento!: number;
  mediaLocation = `${baserUrl}/media/`;
  fecha: Date = new Date();

  trayecto: Trayecto = {
    idtrayecto: 0,
    nomtrayecto: '',
    km: 0
  }
  modalidad: Modalidad = {
    idmodalidad: 1,
    nommodalidad: ''
  }
  categoria: Categoria = {
    idcategoria: 0,
    nomcategoria: '',
    activo: false,
    nomcorto: '',
    orden: 0,
    tanda: 0,
    ascenso: false,
    activonacional: 0,
    edadinicio: 0,
    edadfin: 0,
    sexo: 0,
    tipo: 0,
    trayecto: this.trayecto,
    horario: '',
    modalidad: this.modalidad,
    codigo: ''
  }
  regional: Regional = {
    idregional: 0,
    nomregional: '',
    nomcorto: '',
    logo: '',
    telefono: '',
    direccion: '',
    email: '',
    ano: 0,
    presentacion: ''
  }
  usuario: Usuario = {
    idusuario: 0,
    nombre: '',
    apellido: '',
    telefono: '',
    perfil: '',
    email: '',
    username: '',
    password: '',
    enabled: false,
    idevento: 0,
    regional: this.regional
  }

  region: Region = {
    idregion: 0,
    nomregion: '',
    nomcorto: '',
    logo: ''
  }
  club: Club = {
    idclub: 0,
    nomclub: '',
    presidente: '',
    telepresi: '',
    vicepresidente: '',
    telvice: '',
    telefono: '',
    email: '',
    ruta: '',
    rutagrande: '',
    region: this.region,
    modalidad: this.modalidad
  }
  pais: Pais = {
    idpais: 0,
    nompais: '',
    nacionalidad: ''
  }

  ciudad: Ciudad = {
    idciudad: 0,
    nomciudad: '',
    pais: this.pais
  }
  persona: Persona = {
    idpersona: 0,
    nombre: '',
    apellido: '',
    ci: '',
    sexo: 0,
    fecnac: new Date,
    telefono: '',
    direccion: '',
    email: '',
    foto: '',
    cidelante: '',
    gruposanguineo: '',
    tutorp: '',
    citp: '',
    nacionalidad: '',
    ciudad: this.ciudad,
    tamano: 0
  }

  corredor: Corredor = {
    idcorredor: 0,
    persona: this.persona,
    club: this.club,
    categoria: this.categoria,
    usuario: this.usuario,
    regional: this.regional,
    verificar: 0,
    carnet: '',
    carnetatras: '',
    tipocat: 0,
    licencia: 0,
    modificar: false,
    gruposanguineo: '',
    puntua: 0,
    fecmodi: new Date,
    montopuntua: 0,
    carnetfpc: 0,
    observacion: '',
    catalianza: true
  }

  evento: Evento = {
    idevento: 0,
    fecha: new Date,
    nomevento: '',
    activo: 0,
    direccion: '',
    orden: 0,
    tipoevento: 0,
    modo: 0,
    verencuesta: 0,
    ranqueable: 0,
    preinscrip: 0,
    doble: 0,
    km: 0,
    kmpromo: 0,
    kmmenor: 0,
    informacion: '',
    locales: '',
    deposito: '',
    urlpromocional: '',
    urlcategoria: '',
    contacto: '',
    montopric: 0,
    montopris: 0,
    montomenc: 0,
    montomens: 0,
    fondocolor: '',
    fondo: '',
    club: this.club,
    regional: this.regional,
    alianza: 0,
    modalidad: this.modalidad
  };

  participante: Participante = {
    idparticipante: 0,
    fecha: new Date,
    pagado: 0,
    nrogiro: '',
    costo: 0,
    dorsal: 0,
    puesto: 0,
    puestocat: 0,
    puntaje: 0,
    tiempo: new Date,
    participo: 0,
    completo: 0,
    descalif: 0,
    promedio: 0,
    km: 0,
    orden: 0,
    puntajeaux: 0,
    puntua: 0,
    totalpuntos: 0,
    acobrar: 0,
    corredor: this.corredor,
    evento: this.evento,
    regional: this.regional,
    region: this.region
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
    modificar: false
  };

  ordenes: { label: string, value: number }[] = [
    { label: 'Primera', value: 1 }
  ];

  ordenevento = '';
  ci: string = '';
  selectedTerminos: boolean = false;
  inscripto: boolean = false;
  tipos: Tipo[] = [];
  tamanos: Remera[] = [];
  tamano = 3;
  edad = 0;
  idmodalidad = 1;
  tipo = 3;
  displayRemera: boolean = false;

  clubes: Club[] = [];
  idclub = 0;
  displayClub: boolean = false;



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

    this.eventoTipoService.listarTiposEvento(this.idevento).subscribe(
      {
        next: (dato: any) => {
          this.tipos = dato;
          console.log("tipos evento");
          console.log(this.tipos);
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

this.clubService.publistarClubes(this.idmodalidad).subscribe(
     { 
      next:  (dato: any) => {
        this.clubes = dato;
        this.idclub = this.clubes[0].idclub;
        
        
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
    console.log(this.corredor)
    this.corredorService.actualizarCorredor(this.corredor).subscribe({
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
            this.inscripto = true;

          }, (error) => {
            console.log(error);

            this.messageService.add({
              key: 'bc',
              severity: "info",
              summary: "Atencion",
              detail: "No se encontro el numero de CI del corredor, complete sus datos."
            });
            
          });
      }
    });


  }

  focusOutFunction() {

    let cip = this.ci.replace(/[^0-9]/g, "");
    this.ci = cip;

    this.corredorService.pubObtenerCorredorbusCi(this.ci).subscribe({
      next: (dato: Corredorbus) => {

        this.corredorbus = dato;
        if (dato != null) {
          const fecnac = new Date(dato.fecnac);
          this.corredorbus.fecnac = fecnac;

          this.corredor.idcorredor = dato.idcorredor;
          this.corredor.categoria.idcategoria = dato.idcategoria;
          this.corredor.persona.idpersona = dato.idpersona;
          this.corredor.persona.tamano = dato.tamano;
          
          this.idclub = dato.idclub;
          
          this.displayClub = dato.modificar;

          console.log(this.corredor);
        }


      }, error: (error) => {
        console.log(error);
        this.messageService.add({ severity: 'success', summary: 'Error', detail: 'El corredor no se encuentra', life: 3000 });

      },
      complete: () => {
        console.log('Completo la busqueda de Corredor');
        if (this.corredorbus == null) {
          // this.inscripto = 2;
          this.messageService.add({ severity: 'success', summary: 'Error', detail: 'El corredor no se encuentra', life: 3000 });
        }
      }
    });
  }


  cargarCategoria(cat: any) {
    this.corredor.categoria.idcategoria = cat.idcategoria;

  }
}
