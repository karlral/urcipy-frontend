import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/domain/evento';
import { EventoService } from 'src/app/service/evento.service';
import baserUrl from 'src/app/service/helper';

@Component({
  selector: 'app-inscriptardio',
  templateUrl: './inscriptardio.component.html',
  styleUrls: ['./inscriptardio.component.css']

})
export class InscriptardioComponent implements OnInit{
  mediaLocation = `${baserUrl}/media/`;
  eventoes: Evento[] = [];
 

  constructor( 
    private eventoService: EventoService,
    
    
    ) { }
  
  ngOnInit(): void {

   

    this.eventoService.listarEventosActivosPub().subscribe(
      {
        next: (datos: Evento[]) => {
          this.eventoes = datos;
         
        },
        error: (error) => {
          console.log(error);
          
        },
        complete: () => console.info('completo evento')
      });
  }
}