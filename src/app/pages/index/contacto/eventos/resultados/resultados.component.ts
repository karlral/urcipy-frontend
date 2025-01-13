import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Resultado } from 'src/app/domain/custom/resultado';
import { Evento } from 'src/app/domain/evento';
import { Participante } from 'src/app/domain/participante';
import { EventoService } from 'src/app/service/evento.service';
import baserUrl from 'src/app/service/helper';
import { ParticipanteService } from 'src/app/service/participante.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent  implements OnInit{
  idevento!:number ;
  rutagrande!:string;
  mediaLocation = `${baserUrl}/media/`;

   resultados!:Resultado[];
   

constructor( private activatedRoute:ActivatedRoute,
  private participanteService:ParticipanteService,
  private eventoService:EventoService
  ) { }

ngOnInit(): void {
  
  this.idevento=this.activatedRoute.snapshot.params["idevento"];

  this.participanteService.listarParticipantesByEvento(this.idevento).subscribe(
    {
      next: (p: Resultado[]) => {
        this.resultados = p;
        
      },
      error: (error) => {
        console.log(error);
        
      },
      complete: () => console.info('completo participantes')
    });

    this.eventoService.obtenerEventoPub(this.idevento).subscribe(
      {
        next: (e: Evento) => {
          this.rutagrande = e.club.rutagrande;
          //console.log(e);
        },
        error: (error) => {
          console.log(error);
          
        },
        complete: () => console.info('completo evento')
      });
  }


}