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
import { Pais } from 'src/app/domain/pais';
import { PaisService } from 'src/app/service/pais.service';
import { EventoTipoService } from 'src/app/service/evento-tipo.service';

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
  inscripto = 0; // 0 no inscripto, 1 inscripto ciclismo, 2 runner inscripto
  inscriptoparticipante: any = null;

  fecha: Date = new Date();
  tamanos: Remera[] = [];
  displayRemera: boolean = false;
  displayLicencia: boolean = false;
  displayVerificar: boolean = false;
  displayBotonSubirCat: boolean = false;
  displayRegCorredor: boolean = false;
  tipos: any[] = [];
  paises: Pais[] = [];
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
    modificar: false,
    licencia: 0
    
  };

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
      regcorredor: false
  };
  organizador = 0;
  tipocat=0;
  recorrertipocat_i = 0;
  cantidadtipocat = 0;
tipoorganizador: string = 'Elige el Club';

  constructor(private activatedRoute: ActivatedRoute,
    private eventoService: EventoService,
    private datasys: Datasys,
    private messageService: MessageService,
    private participanteService: ParticipanteService,
    private corredorService: CorredorService,
    private eventoRemeraService: EventoRemeraService,
    private eventoTipoService: EventoTipoService,
    private clubService: ClubService,
    private paisService: PaisService

  ) { }

  ngOnInit(): void {
    this.idevento = this.activatedRoute.snapshot.params["idevento"];

    this.eventoService.obtenerEventoPub(this.idevento).subscribe(
      {
        next: (e: Evento) => {
          this.evento = e;
          this.organizador = this.evento.organizador;
          this.displayRemera = this.evento.conremera == 1;
          this.displayLicencia = this.evento.conlicencia == 1;
          this.rutagrande = this.evento.club.rutagrande;
          this.partici.idevento = this.evento.idevento;
          this.partici.idregional = this.evento.regional.idregional;
          this.idmodalidad = this.evento.modalidad.idmodalidad;
          if (this.organizador == 2) {
            this.tipoorganizador = 'Elige Unidad Academica'; 
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
          console.info('completo evento');

          this.clubService.publistarClub(this.idmodalidad, this.organizador).subscribe(
            {
              next: (dato: any) => {
                //console.log("clubes");
                //console.log(dato);      
                this.clubes = dato.sort((a: Club, b: Club) => a.nomclub.localeCompare(b.nomclub));
                this.partici.idclub = this.clubes.length > 0 ? this.clubes[0].idclub : 1;
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
          this.cantidadtipocat = this.tipos.length;
          this.tipos.sort((a: any, b: any) => a.idtipo - b.idtipo);
          this.corredorbus.tipocat = this.tipos.length > 0 ? this.tipos[0].idtipo : 0;
          this.tipocat = this.corredorbus.tipocat;
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
         // this.displayRemera = this.tamanos.length > 0;
          this.partici.tamano = 5;

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

   /* this.clubService.publistarClube(this.idmodalidad).subscribe(
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
      });*/

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
if (this.partici.ci.trim().length < 6) {

      this.messageService.add({
        severity: "error",
        summary: "Atencion",
        detail: "La Cedula de identidad debe tener minimamente 6 numeros  o contactese con la organizacion del evento al numero: " + this.evento.contacto
      });

      return;
    }
    if (this.partici.nombre.trim().length < 4) {

      this.messageService.add({
        severity: "error",
        summary: "Atencion",
        detail: "El nombre debe tener minimamente 4 caracteres  o contactese con la organizacion del evento al numero: " + this.evento.contacto
      });

      return;
    }
    if (this.partici.apellido.trim().length < 4) {

      this.messageService.add({
        severity: "error",
        summary: "Atencion",
        detail: "El apellido debe tener minimamente 4 caracteres  o contactese con la organizacion del evento al numero: " + this.evento.contacto
      });

      return;
    }
    if (this.partici.telefono.trim().length < 4) {

      this.messageService.add({
        severity: "error",
        summary: "Atencion",
        detail: "El telefono debe tener minimamente 4 caracteres  o contactese con la organizacion del evento al numero: " + this.evento.contacto
      });

      return;
    }
   
    console.log(this.partici);

    this.participanteService.inscribirPartici(this.partici).subscribe(
      {
        next: (data: any) => {

          //this.router.navigate(['eventobus']);
          this.inscriptoparticipante = data;
          if (this.idmodalidad == 2) {
            this.inscripto = 2;
          } else {
            this.inscripto = 1;
          }
          this.messageService.add({
            severity: "success",
            summary: "Inscripcion correcta",
            detail: "El corredor se inscribio correctamente"
          });
         // console.log("participante inscripto");
         // console.log(data);
         // console.log(this.inscriptoparticipante);
         // console.log(this.partici);


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
      if (this.idmodalidad==2) {
        this.buscarcorredorrun(this.partici.ci);
      } else {
        this.buscarcorredor(this.partici.ci);
      }

      
    }
  }
  buscarcorredor(ci: string) {
    this.corredorService.pubObtenerCorredorbusxCi(this.partici.ci).subscribe({
        next: (dato: Corredorbus) => {

          this.corredorbus = dato;
          const fecnac = new Date(dato.fecnac);
          this.corredorbus.fecnac = fecnac;
          this.cargarpartici();


        }, error: (error) => {
          console.log(error);
          if (this.partici.ci.length == 6){
            console.log('Ci de 6 digitos, no se busca corredor');
          }else{
            this.messageService.add({ severity: 'info', summary: 'Atencion', detail: 'Corredor no encuentra con CI: ' + this.partici.ci
              + 'agregue los siguientes datos', life: 3000 });
              this.resetPartici();
              this.partici.modificar=true;
              this.displayRegCorredor = true;
              


            //this.messageService.add({ severity: 'error', summary: 'Atencion', detail: 'El corredor no se encuentra o contactese con la organizacion del evento al numero: ' + this.evento.contacto, life: 5000 });
          }
        },
        complete: () => {
          console.log('Completo la busqueda de Corredor');

        }
      });
  }
  
  buscarcorredorrun(ci: string) {
    this.corredorService.pubObtenerCorredorbusxCiRun(this.partici.ci).subscribe({
        next: (dato: Corredorbus) => {

          this.corredorbus = dato;
          const fecnac = new Date(dato.fecnac);
          this.corredorbus.fecnac = fecnac;
          this.cargarpartici();
          
          

        }, error: (error) => {
          console.log(error);
          if (this.partici.ci.length == 6){
            console.log('Ci de 6 digitos, no se busca corredor');
          }else{
            this.messageService.add({ severity: 'info', summary: 'Atencion', detail: 'Corredor no encuentra con CI: ' + this.partici.ci
              + 'agregue los siguientes datos', life: 3000 });
              this.resetPartici();
              this.partici.modificar=true;
              this.displayRegCorredor = true;
              
            //this.messageService.add({ severity: 'error', summary: 'Atencion', detail: 'El corredor no se encuentra o contactese con la organizacion del evento al numero: ' + this.evento.contacto, life: 5000 });
          }
        },
        complete: () => {
          console.log('Completo la busqueda de Corredor');

        }
      });
  }

  cargarpartici() {
    
          
          this.displayRegCorredor = false;

          this.partici.regcorredor = this.displayRegCorredor;



          this.partici.idcorredor = this.corredorbus.idcorredor;
          this.partici.idcategoria = this.corredorbus.idcategoria;
          this.partici.idclub = this.corredorbus.idclub;
          this.partici.tamano = this.corredorbus.tamano == null ? 0 : this.corredorbus.tamano;
          
        this.partici.nombre = this.corredorbus.nombre ? this.corredorbus.nombre : this.corredorbus.corredor.split(' ')[0];
          this.partici.apellido = this.corredorbus.apellido ? this.corredorbus.apellido : this.corredorbus.corredor.split(' ').slice(1).join(' ');
  
          this.partici.telefono = this.corredorbus.telefono;
          this.partici.corredor = this.corredorbus.corredor;

          this.partici.fecnac = this.corredorbus.fecnac;
          this.partici.sexo = this.corredorbus.sexo;
          this.partici.tipocat = this.corredorbus.tipocat;
          this.partici.modificar = this.corredorbus.modificar;
          this.partici.licencia = this.corredorbus.licencia;
          this.oldtipocat = this.corredorbus.tipocat;
          this.partici.idmodalidad = this.idmodalidad;
          this.partici.idusuario = 91; //usuario de prueba, luego se setea con el del login


          if (this.partici.modificar) {

            this.messageService.add({ severity: 'info', summary: 'Atencion', detail: 'Verifique sus datos si estan correctos, puede actualizar si lo desea.', life: 3000 });
          }

  }

  resetPartici() {
    this.partici.idparticipante = 0;
    this.partici.idevento = this.evento.idevento;
    this.partici.idcorredor = 0;
    this.partici.idcategoria = 1;
    this.partici.corredor = '';
    this.partici.idclub = 1;
    this.partici.tamano = 0;
    this.partici.telefono = '';
    this.partici.nombre = '';
    this.partici.apellido = '';
      this.partici.fecnac = this.fechaant;
      this.partici.sexo = 1;
      this.partici.nacionalidad = "Paraguaya";
      this.partici.tipocat = 3;
      this.partici.modificar = false;
      this.partici.regcorredor = true;

}

  cargarCategoria(cat: any) {
    this.partici.idcategoria = cat.idcategoria;
    this.partici.tipocat = cat.tipo;

  }
  subirCategoria() {
    
        this.partici.tipocat = this.tipos[this.recorrertipocat_i].idtipo;
        this.recorrertipocat_i++;
        if (this.recorrertipocat_i >= this.cantidadtipocat) {
          this.recorrertipocat_i = 0;
        }


  }
 


}
