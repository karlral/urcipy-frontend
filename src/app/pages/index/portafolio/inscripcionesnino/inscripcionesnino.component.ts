import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inscripcion } from 'src/app/domain/custom/inscripcion';

import baserUrl from 'src/app/service/helper';
import { ParticipanteService } from 'src/app/service/participante.service';

@Component({
  selector: 'app-inscripcionesnino',
  templateUrl: './inscripcionesnino.component.html',
  styleUrls: ['./inscripcionesnino.component.css']
})
export class InscripcionesninoComponent  implements OnInit{
  activo!:number ;
  visible:string="inscripto";
  mediaLocation = `${baserUrl}/media/`;

  inscripciones!:Inscripcion[];


  constructor( private activatedRoute:ActivatedRoute, 
    private participanteService:ParticipanteService,
    ) { }
  
  ngOnInit(): void {
    this.activo=this.activatedRoute.snapshot.params["activo"];

    this.participanteService.listarParticipantesActivosNino(this.activo).subscribe(
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

  buttonSubmit(visible:string){
    this.visible=visible;
   
  }

}
