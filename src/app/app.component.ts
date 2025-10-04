import { Component, OnInit } from '@angular/core';
import system from './service/helpersys';
import { RegionalService } from './service/regional.service';
import { SystemService } from './service/system.service';
import baserUrl from './service/helper';
import { Evento } from './domain/evento';
import { EventoService } from './service/evento.service';
import { Datasys } from './service/datasys';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Datasys]
})
export class AppComponent implements OnInit{
  acceso = system;
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
    modalidad: this.modalidad
  };
  ordenes:{label:string,value:number}[]=[]
  fechaanterior:any;

  
  title = 'URCI';

  visible: boolean = true;
  constructor(
    private regionalService: RegionalService,
    private systemService: SystemService,
    private eventoService: EventoService,
    private datasys:Datasys
  ) {}
  ngOnInit(): void {
    // console.log(this.title+': '+system);
    this.regional = this.systemService.getSystem();
    if (this.regional == null) {
      this.regionalService.obtenerRegionalPub(system).subscribe({
        next: (dato: any) => {
          this.regional = dato;

          this.systemService.setSystem(this.regional);
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => console.info('completo carga de regionales'),
      });
    }

    this.datasys.getOrdenes().then(data=>{
      this.ordenes=data;
    });

    this.eventoService.listarEventosActivosPub().subscribe(
      {
        next: (datos: Evento[]) => {
          this.eventoes = datos;
          this.evento = datos[0];

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
  mostrarMenu() {
    this.visible = !this.visible;
  }
}
