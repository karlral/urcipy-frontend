import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/domain/evento';
import { Datasys } from 'src/app/service/datasys';
import { EventoService } from 'src/app/service/evento.service';
import baserUrl from 'src/app/service/helper';
import system from 'src/app/service/helpersys';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css'],
  providers:[Datasys]
})
export class PortafolioComponent implements OnInit{
  acceso = system;
  mediaLocation = `${baserUrl}/media/`;
  eventoes: Evento[] = [];
  ordenes:{label:string,value:number}[]=[];
  fechaanterior:any;

  constructor( 
    private eventoService: EventoService,
    private datasys:Datasys
    
    ) { }
  
  ngOnInit(): void {

    this.datasys.getOrdenes().then(data=>{
      this.ordenes=data;
    });

    this.eventoService.listarEventosActivosPub().subscribe(
      {
        next: (datos: Evento[]) => {
          this.eventoes = datos;
          this.fechaanterior = new Date(datos[0].fecha)
          const fecha = new Date(datos[0].fecha);
          this.fechaanterior.setDate(fecha.getDate() -1);
         
        },
        error: (error) => {
          console.log(error);
          
        },
        complete: () => console.info('completo evento')
      });
  }
}
