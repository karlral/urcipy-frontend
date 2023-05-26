import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/domain/evento';
import { Datasys } from 'src/app/service/datasys';
import { EventopubService } from 'src/app/service/eventopub.service';
import baserUrl from 'src/app/service/helper';
import { ActivatedRoute, Router } from '@angular/router';

import { MessageService } from "primeng/api";
import { Club } from 'src/app/domain/club';
import { Regional } from 'src/app/domain/regional';
import { ParticipubService } from 'src/app/service/participub.service';

@Component({
  selector: 'app-eventobus',
  templateUrl: './eventobus.component.html',
  styleUrls: ['./eventobus.component.css'],
  providers:[Datasys,MessageService]
})
export class EventobusComponent implements OnInit{
  idevento!:number ;
  mediaLocation = `${baserUrl}/media/`;

  regional:Regional={
    idregional: 0,
    nomregional: '',
    nomcorto: '',
    logo: ''
  }
  club:Club={
    idclub: 0,
    nomclub: '',
    presidente: '',
    telepresi: '',
    vicepresidente: '',
    telvice: '',
    telefono: '',
    email: '',
    ruta: '',
    rutagrande: '',
    regional: this.regional
  }
  evento: Evento= {
    idevento: 0,
    fecha: new Date,
    nomevento: '',
    activo: 0,
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
    club: this.club
  };
  ordenes:{label:string,value:number}[]=[
    { label: 'Primera', value: 1 }
  ];

  ordenevento='';
  ci!:string;
  selectedTerminos:boolean=false;

  constructor( private activatedRoute:ActivatedRoute,
    private eventoService: EventopubService,
    private datasys:Datasys,
    private messageService: MessageService,
    private participub:ParticipubService,
    private router: Router
    ) { }
  
  ngOnInit(): void {
    this.idevento=this.activatedRoute.snapshot.params["idevento"];

    this.eventoService.obtenerEvento(this.idevento).subscribe(
      {
        next: (e: Evento) => {
          this.evento = e;
          //console.log(this.eventoes);
          this.datasys.getOrdenes().then(data=>{
            this.ordenes=data;
            this.ordenevento=this.ordenes[this.evento.orden-1].label
          });
        },
        error: (error) => {
          console.log(error);
          
        },
        complete: () => console.info('completo evento')
      });

      
  }

  formSubmit(){
    console.log("agregamos el click de "+this.ci+" ID EVENTO "+this.evento.idevento);
    if (this.ci.trim() == '' || this.ci.trim() == null) {

      this.messageService.add({
        severity: "error",
        summary: "Atencion",
        detail: "Complete su Cedula de identidad sin puntos"
      });

      return;
    }
    this.participub.inscribirPartiCi(this.ci).subscribe(
      (data: any) => {
        console.log(data);
        this.router.navigate(['eventobus']);
        

      }, (error) => {
        console.log(error);
        
        this.messageService.add({
          severity: "error",
          summary: "Atencion",
          detail: "Cedula de identidad no encontrada, digite sin puntos o falta registrar."
        });

      }
    )


  }
}
