import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/domain/evento';
import { Datasys } from 'src/app/service/datasys';
import { EventoService } from 'src/app/service/evento.service';
import baserUrl from 'src/app/service/helper';
import { SystemService } from 'src/app/service/system.service';

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
  regional:any;
  
  constructor( 
    private eventoService: EventoService,
    private datasys:Datasys,
    private systemService:SystemService
    
    ) { }
  
  ngOnInit(): void {
    this.regional=this.systemService.getSystem();
    
    this.datasys.getOrdenes().then(data=>{
      this.ordenes=data;
    });

    this.eventoService.listarEventosModoPub(2).subscribe(
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
  

}
