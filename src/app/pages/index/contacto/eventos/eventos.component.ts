import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/domain/evento';
import { EventoService } from 'src/app/service/evento.service';
import baserUrl from 'src/app/service/helper';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent  implements OnInit{
   
    mediaLocation = `${baserUrl}/media/`;
  
     eventos!:Evento[];
     
  
  constructor( 
    private eventoService:EventoService
    ) { }
  
  ngOnInit(): void {
    
    
    this.eventoService.listarEventosCulminadosPub().subscribe(
      {
        next: (e: Evento[]) => {
          this.eventos = e;
          console.log(this.eventos);
          
        },
        error: (error) => {
          console.log(error);
          
        },
        complete: () => console.info('completo eventos en proceso')
      });
    }
  
 
}
