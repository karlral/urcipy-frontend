import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/domain/evento';
import { EventoService } from 'src/app/service/evento.service';
import baserUrl from 'src/app/service/helper';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']

})
export class ResultadosComponent implements OnInit{
  mediaLocation = `${baserUrl}/media/`;
  eventoes: Evento[] = [];
  
  regional:any;
  
  constructor( 
    private eventoService: EventoService,
    
    private systemService:SystemService
    
    ) { }
  
  ngOnInit(): void {
    this.regional=this.systemService.getSystem();
    
   

    this.eventoService.listarEventosModoPub(1).subscribe(
      {
        next: (datos: Evento[]) => {
          this.eventoes = datos;
          console.log(this.eventoes);
        
        },
        error: (error) => {
          console.log(error);
          
        },
        complete: () => console.info('completo evento')
      });
  }
  
  openInNewTab(url:string){
    window.open(url, "_blank", "noreferrer");
  }

}
