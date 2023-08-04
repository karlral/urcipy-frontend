import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Punclubpartici } from 'src/app/domain/custom/punclubpartici';
import baserUrl from 'src/app/service/helper';
import { ParticipanteService } from 'src/app/service/participante.service';

@Component({
  selector: 'app-clubpuntajedet',
  templateUrl: './clubpuntajedet.component.html',
  styleUrls: ['./clubpuntajedet.component.css']
})
export class ClubpuntajedetComponent  implements OnInit{
  idclub!:number ;
  rutagrande!:string;
  mediaLocation = `${baserUrl}/media/`;

  punclubparticipantes!:Punclubpartici[];
   
  tipo!:string;
  
constructor( private activatedRoute:ActivatedRoute,
  private participanteService:ParticipanteService
  ) { }

ngOnInit(): void {

  this.tipo=this.activatedRoute.snapshot.params["tipo"];
  
  this.idclub=this.activatedRoute.snapshot.params["idclub"];

  this.participanteService.pubListarPuntosByClubPartici(this.tipo,this.idclub).subscribe(
    {
      next: (p: Punclubpartici[]) => {
        this.punclubparticipantes = p;
      },
      error: (error) => {
        console.log(error);
        
      },
      complete: () => console.info('completo punclubpartici')
    });
  }

  calculatePuntosSubTotal(name:string) {
    let total = 0;
  
    if (this.punclubparticipantes) {
        for (let partici of this.punclubparticipantes) {
            if (partici.nomevento === name) {
                total=total+partici.puntaje;
            }
        }
    }
  
    return total;
  }

  calculatePuntosTotal() {
    let total = 0;
  
    if (this.punclubparticipantes) {
        for (let partici of this.punclubparticipantes) {
           
                total=total+partici.puntaje;
           
        }
    }
  
    return total;
  }
}