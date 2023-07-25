import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Punclub } from 'src/app/domain/custom/punclub';
import baserUrl from 'src/app/service/helper';
import { ParticipanteService } from 'src/app/service/participante.service';

@Component({
  selector: 'app-clubpuntaje',
  templateUrl: './clubpuntaje.component.html',
  styleUrls: ['./clubpuntaje.component.css']
})
export class ClubpuntajeComponent implements  OnInit {
  punclubes!:Punclub[];

  mediaLocation = `${baserUrl}/media/`;

  tipo!:string;
  

  constructor(private activatedRoute:ActivatedRoute,
    private participanteService: ParticipanteService
  ) { }

 ngOnInit(): void {
  this.tipo=this.activatedRoute.snapshot.params["tipo"];


  this.participanteService.pubListarPuntosInClub(this.tipo).subscribe(
     {
       next: (dato: Punclub[]) => {
         this.punclubes = dato;
          /* this.punclub=this.puntoscorredor[0]; */  
         console.log(this.punclubes);
       },
       error: (error) => {
         console.log(error);
         
       },
       complete: () => console.info('completo carga de categorias')
     });
   
 }

}