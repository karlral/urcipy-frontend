import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/domain/evento';
import { EventoService } from 'src/app/service/evento.service';
import baserUrl from 'src/app/service/helper';


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
  evento: Evento = {
    idevento: 0,
    fecha: this.fecha,
    nomevento: '',
    activo: 0,
    alianza: 0,
    direccion: '',
    orden: 0,
    tipoevento: 0,
    modo: 0,
    verencuesta: 0,
    ranqueable: 0,
    preinscrip: 0,
    doble: 0,
    km: 0,
    kmpromo: 0,
    kmmenor: 0,
    informacion: '',
    locales: '',
    deposito: '',
    urlpromocional: '',
    urlcategoria: '',
    contacto: '',
    montopric: 0,
    montopris: 0,
    montomenc: 0,
    montomens: 0,
    fondocolor: '',
    fondo: '',
    club: this.club,
    regional: this.regional,
    modalidad: this.modalidad,
    ubicacion: '',
    ubidorsal: '',
    gpxprincipal: '',
    gpxpromocional: '',
    dosier: '',
    facebook: '',
    instagram: '',
    hoteles: ''
  };
  

  
 


  constructor(
    private eventoService: EventoService  ) {}
  ngOnInit(): void {
    

    this.eventoService.listarEventosActivosPub().subscribe(
      {
        next: (datos: Evento[]) => {
          this.eventoes = datos;
          this.evento = datos[0];
         // console.log(this.evento);
         
         
        },
        error: (error) => {
          console.log(error);
          
        },
        
        complete: () => {
          
          console.info('completo evento');
        }
      });
  }
  
}
