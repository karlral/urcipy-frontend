import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/app/domain/categoria';
import { Club } from 'src/app/domain/club';
import { Inscripcion } from 'src/app/domain/custom/inscripcion';
import { Evento } from 'src/app/domain/evento';
import { Region } from 'src/app/domain/region';

import { Regional } from 'src/app/domain/regional';
import { CategoriaService } from 'src/app/service/categoria.service';
import { EventoService } from 'src/app/service/evento.service';
import baserUrl from 'src/app/service/helper';
import { ParticipanteService } from 'src/app/service/participante.service';


@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.css']
})
export class InscripcionesComponent  implements OnInit{
  activo!:number ;
  visible:any;
  mediaLocation = `${baserUrl}/media/`;

  regional:Regional={
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
  region:Region={
    idregion: 0,
    nomregion: '',
    nomcorto: '',
    logo: ''
  }
  club:Club={
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
    regional: this.regional,
    region: this.region
  }
  evento:Evento={
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
    regional: this.regional
  };

  inscripciones!:Inscripcion[];

  categorias!:Categoria[];

  constructor( private activatedRoute:ActivatedRoute,
    private eventoService: EventoService,
    private participanteService:ParticipanteService,
    private categoriaService:CategoriaService
    ) { }
  
  ngOnInit(): void {
    this.activo=this.activatedRoute.snapshot.params["activo"];

    this.participanteService.listarParticipantesActivos(this.activo).subscribe(
      {
        next: (p: Inscripcion[]) => {
          this.inscripciones = p;
        
          
        },
        error: (error) => {
          console.log(error);
          
        },
        complete: () => console.info('completo inscripcion')
      });

      

    this.eventoService.obtenerEventoActivoPub(this.activo).subscribe(
      {
        next: (e: Evento) => {
          this.evento = e;
          
        },
        error: (error) => {
          console.log(error);
          
        },
        complete: () => console.info('completo evento')
      });


      this.categoriaService.listarCategoriaActivo().subscribe(
        {
          next: (p) => {
            this.categorias = p;
          
            
          },
          error: (error) => {
            console.log(error);
            
          },
          complete: () => console.info('completo categorias activas')
        });
  }

  buttonSubmit(visible:string){
    this.visible=visible;
   
  }

}
