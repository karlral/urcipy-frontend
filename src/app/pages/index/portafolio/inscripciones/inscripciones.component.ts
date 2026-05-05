import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/app/domain/categoria';
import { Inscripcion } from 'src/app/domain/custom/inscripcion';
import { Evento } from 'src/app/domain/evento';

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

  
  evento={
    idevento: 0,
    club:{
      idclub: 0,
      rutagrande: '',
    }
    
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
            this.recorrer();
            
          },
          error: (error) => {
            console.log(error);
            
          },
          complete: () => console.info('completo categorias activas')
        });
  }
  recorrer(){
        for(let i=0; i<this.inscripciones.length;i++){
          this.inscripciones[i].categoria=this.inscripciones[i].catalternativo;
        }
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
