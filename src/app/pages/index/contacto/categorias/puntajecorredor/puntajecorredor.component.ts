import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Puntocorredor } from 'src/app/domain/custom/puntocorredor';
import baserUrl from 'src/app/service/helper';
import { ParticipanteService } from 'src/app/service/participante.service';

@Component({
  selector: 'app-puntajecorredor',
  templateUrl: './puntajecorredor.component.html',
  styleUrls: ['./puntajecorredor.component.css']
})
export class PuntajecorredorComponent implements OnInit {
  puntoscorredor!:Puntocorredor[];

  mediaLocation = `${baserUrl}/media/`;

  idcorredor:number=0;
  puntocorredor:Puntocorredor={
    idcorredor: 0,
    corredor: '',
    categoria: '',
    ruta: '',
    club: '',
    evento: '',
    puestocat: 0,
    puntaje: 0
  }

  constructor(private activatedRoute:ActivatedRoute,
    private participanteService: ParticipanteService
  ) { }

 ngOnInit(): void {
  this.idcorredor=this.activatedRoute.snapshot.params["idcorredor"];

  this.participanteService.pubListarPuntosByIdCorredor(this.idcorredor).subscribe(
     {
       next: (dato: Puntocorredor[]) => {
         this.puntoscorredor = dato;
          this.puntocorredor=this.puntoscorredor[0];  
         console.log(this.puntoscorredor);
       },
       error: (error) => {
         console.log(error);
         
       },
       complete: () => console.info('completo carga de categorias')
     });
   
 }

}