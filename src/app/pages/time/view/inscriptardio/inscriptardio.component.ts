import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/domain/evento';
import { EventoService } from 'src/app/service/evento.service';
import baserUrl from 'src/app/service/helper';
import system from 'src/app/service/helpersys';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-inscriptardio',
  templateUrl: './inscriptardio.component.html',
  styleUrls: ['./inscriptardio.component.css']

})
export class InscriptardioComponent implements OnInit{
  mediaLocation = `${baserUrl}/media/`;
  eventoes: Evento[] = [];
 
 userRole:any=null;
  permitido:boolean=false;

  constructor( 
    private eventoService: EventoService,
    private login:LoginService
    
    
    ) { }
  
  ngOnInit(): void {

    
    this.userRole=this.login.getUserRole();
    this.permitido=this.userRole.includes('TIME');

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