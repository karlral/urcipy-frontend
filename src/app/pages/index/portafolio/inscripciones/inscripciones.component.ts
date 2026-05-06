import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inscripcion } from 'src/app/domain/custom/inscripcion';
import { Evento } from 'src/app/domain/evento';

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

  
  
  evento:any={
    idevento: 0,
   club:{
    idclub: 0,
    rutagrande: '',
   }
  };

  inscripciones!:Inscripcion[];

 

  constructor( private activatedRoute:ActivatedRoute,
    private eventoService: EventoService,
    private participanteService:ParticipanteService,
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


      
  }

  buttonSubmit(visible:string){
    this.visible=visible;
   
  }

}
