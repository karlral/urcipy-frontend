import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/domain/evento';
import { Datasys } from 'src/app/service/datasys';
import { EventopubService } from 'src/app/service/eventopub.service';
import baserUrl from 'src/app/service/helper';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css'],
  providers:[Datasys]
})
export class PortafolioComponent implements OnInit{
  mediaLocation = `${baserUrl}/media/`;
  eventoes: Evento[] = [];
  ordenes:{label:string,value:number}[]=[];

  constructor( 
    private eventoService: EventopubService,
    private datasys:Datasys
    
    ) { }
  
  ngOnInit(): void {

    this.datasys.getOrdenes().then(data=>{
      this.ordenes=data;
    });

    this.eventoService.listarEventosActivos().subscribe(
      {
        next: (datos: Evento[]) => {
          this.eventoes = datos;
          //console.log(this.eventoes);
        },
        error: (error) => {
          console.log(error);
          
        },
        complete: () => console.info('completo evento')
      });
  }
}
