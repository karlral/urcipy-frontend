import { Component, OnInit } from '@angular/core';

import { MessageService } from 'primeng/api';
import { Historial } from 'src/app/domain/historial';
import { HistorialService } from 'src/app/service/historial.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css'],
  providers: [MessageService]
})
export class HistorialComponent  {
  corredores: Historial[] = [];

  displaySearch=true;
  buscado:string="";
  nomparticipante:string="";

  constructor( private historialService: HistorialService,
    private messageService: MessageService
    ) { }
 

  corredorSearch(buscado:string){
    console.log('Buscamos la cantidad de registros con '+buscado);
    this.displaySearch=false;
    this.historialService.pubListarCorredor(buscado).subscribe(
      {
        next: (datos: Historial[]) => {
          this.corredores = datos;
          this.nomparticipante=this.corredores[0].nomparticipante;
         
        },
        error: (error) => {
          console.log(error);
          this.messageService.add({
            severity: "error",
            summary: "Corredor",
            detail: "Error al cargar la corredor"
          });
        },
        complete: () => console.info('completo corredor')
      });

  }

  showSearch(){
    this.buscado="";
    this.displaySearch=true;
  }

  

  
}

