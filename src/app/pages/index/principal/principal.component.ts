import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/domain/evento';
import { EventoService } from 'src/app/service/evento.service';
import baserUrl from 'src/app/service/helper';
import { SystemService } from 'src/app/service/system.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent  implements OnInit{
  
  mediaLocation = `${baserUrl}/media/`;
  eventoes: Evento[] = [];
  fecha = new Date();
  club: any = {};
  regional: any = {};
  modalidad: any = {};
  evento: any = {
    idevento: 0,
    
  };
  

  
 


  constructor(
    private eventoService: EventoService ,
  private systemService: SystemService ) {}
  ngOnInit(): void {
    

    this.eventoService.listarEventosActivosPub().subscribe(
      {
        next: (datos: Evento[]) => {
          this.eventoes = datos;
          this.evento = datos[0];
         //console.log(this.evento);
         
         
        },
        error: (error) => {
          console.log(error);
          
        },
        
        complete: () => {
          
          console.info('completo evento');
        }
      });

      this.regional = this.systemService.getSystem();
  }
  
}
