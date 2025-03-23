import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/domain/evento';
import { Datasys } from 'src/app/service/datasys';
import { EventoService } from 'src/app/service/evento.service';
import baserUrl from 'src/app/service/helper';
import { ActivatedRoute } from '@angular/router';

import { MessageService } from "primeng/api";
import { ParticipanteService } from 'src/app/service/participante.service';

@Component({
  selector: 'app-eventobusnino',
  templateUrl: './eventobusnino.component.html',
  styleUrls: ['./eventobusnino.component.css'],
    providers:[Datasys,MessageService]
})
export class EventobusninoComponent implements OnInit{
  idevento!:number ;
  mediaLocation = `${baserUrl}/media/`;

  
  evento: any= {
  };

  participante:any={
  }

  
  ordenes:{label:string,value:number}[]=[
    { label: 'Primera', value: 1 }
  ];

  ordenevento='';
  ci:string='';
  selectedTerminos:boolean=false;
  inscripto:boolean=false;


  constructor( private activatedRoute:ActivatedRoute,
    private eventoService: EventoService,
    private datasys:Datasys,
    private messageService: MessageService,
    private participanteService:ParticipanteService,
    
    ) { }
  
  ngOnInit(): void {
    this.idevento=this.activatedRoute.snapshot.params["idevento"];

    this.eventoService.obtenerEventoPub(this.idevento).subscribe(
      {
        next: (e: Evento) => {
          this.evento = e;
         
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
    let ci = this.ci.trim();
    ci = ci.replace(/\./g, '');
    
    this.participanteService.inscribirPartiCi(this.idevento,ci).subscribe(
      (data: any) => {
        
        //this.router.navigate(['eventobus']);
        this.participante=data;
        this.inscripto=true;
        

      }, (error) => {
        console.log(error);
        
        this.messageService.add({
          key: 'bc',
          severity: "info",
          summary: "Atencion",
          detail: "No se encontro el numero de CI del corredor, complete sin puntos."
        });

      }
    )


  }
}
