import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/app/domain/categoria';
import { Club } from 'src/app/domain/club';
import { Inscripcion } from 'src/app/domain/custom/inscripcion';
import { Evento } from 'src/app/domain/evento';
import { Modalidad } from 'src/app/domain/modalidad';
import { Region } from 'src/app/domain/region';

import { Regional } from 'src/app/domain/regional';
import { CategoriaService } from 'src/app/service/categoria.service';
import { EventoService } from 'src/app/service/evento.service';
import baserUrl from 'src/app/service/helper';
import { ParticipanteService } from 'src/app/service/participante.service';

@Component({
  selector: 'app-inscripcionesrun',
  templateUrl: './inscripcionesrun.component.html',
  styleUrls: ['./inscripcionesrun.component.css']
})
export class InscripcionesrunComponent  implements OnInit{
  activo!:number ;
  visible:any;
  mediaLocation = `${baserUrl}/media/`;

  
  evento:any;

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

    if(visible=='confirmado'){
      this.participanteService.listarParticipantesActivosPagos(this.activo).subscribe(
      {
        next: (p: Inscripcion[]) => {
          this.inscripciones = p;   
        },
        error: (error) => {
          console.log(error);
          
        },
        complete: () => console.info('completo inscripcion')
      });
    } 

    this.visible=visible;
   
  }

}
