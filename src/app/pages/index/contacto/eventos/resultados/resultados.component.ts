import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Participante } from 'src/app/domain/participante';
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

   participantes!:Participante[];
   

constructor( private activatedRoute:ActivatedRoute,
  private participanteService:ParticipanteService
  ) { }

ngOnInit(): void {
  
  this.idevento=this.activatedRoute.snapshot.params["idevento"];

  this.participanteService.listarParticipantesByEvento(this.idevento).subscribe(
    {
      next: (p: Participante[]) => {
        this.participantes = p;
        this.rutagrande=p[0].evento.club.rutagrande;
      },
      error: (error) => {
        console.log(error);
        
      },
      complete: () => console.info('completo participantes')
    });
  }


}