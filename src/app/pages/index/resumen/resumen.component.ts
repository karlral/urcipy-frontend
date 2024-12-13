import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/domain/evento';
import { Datasys } from 'src/app/service/datasys';
import { EventoService } from 'src/app/service/evento.service';
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
    private eventoService: EventoService,
    private datasys:Datasys
    
    ) { }
  
  ngOnInit(): void {

    this.datasys.getOrdenes().then(data=>{
      this.ordenes=data;
    });

    this.eventoService.listarEventosModoPub(2).subscribe(
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
