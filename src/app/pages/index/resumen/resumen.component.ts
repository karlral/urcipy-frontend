import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/domain/evento';
import { Datasys } from 'src/app/service/datasys';
import { EventopubService } from 'src/app/service/eventopub.service';
import baserUrl from 'src/app/service/helper';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css'],
  providers:[Datasys]
})
export class ResumenComponent implements OnInit{
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

    this.eventoService.listarEventosModo(0).subscribe(
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
