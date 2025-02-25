import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/domain/evento';
import { EventoService } from 'src/app/service/evento.service';
import baserUrl from 'src/app/service/helper';
import system from 'src/app/service/helpersys';
import { RegionalService } from 'src/app/service/regional.service';
import { SystemService } from 'src/app/service/system.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
 
  transition={type:'spring',duration: 3}
  mobile=window.innerWidth<=768 ? true:false;
  

  mediaLocation = `${baserUrl}/media/`;

  regional:any={};
  programsData:any[]=[];
  eventoes: Evento[] = [];
  event:any={};
 
  constructor(private regionalService:RegionalService,
    private systemService:SystemService,
    private eventoService: EventoService,
    
  ){
    
  }
  ngOnInit(): void {
    this.eventoService.listarEventosActivosPub().subscribe(
      {
        next: (datos: Evento[]) => {
          this.eventoes = datos;
          this.event=this.eventoes[0];

         
        },
        error: (error) => {
          console.log(error);
          
        },
        complete: () => console.info('completo evento')
      });
      
    this.regionalService.obtenerRegionalPub(system).subscribe(
      {
        next: (dato: any) => {
          this.regional=dato;
          
          this.systemService.setSystem(this.regional);   
          
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => console.info('completo carga de regionales')
      });
      
        
    
  }

  openInNewTab(url:string){
    window.open(url, "_blank", "noreferrer");
  }

}
