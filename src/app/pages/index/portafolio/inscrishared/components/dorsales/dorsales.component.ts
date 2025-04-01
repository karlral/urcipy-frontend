import { Component, Input, OnInit } from '@angular/core';
import { Inscripcion } from 'src/app/domain/custom/inscripcion';
import baserUrl from 'src/app/service/helper';

@Component({
  selector: 'app-dorsales',
  templateUrl: './dorsales.component.html',
  styleUrls: ['./dorsales.component.css']
})
export class DorsalesComponent  implements OnInit{
 
  mediaLocation = `${baserUrl}/media/`;

  @Input()  inscripciones!:Inscripcion[];

   ngOnInit(): void {

    this.inscripciones.forEach(partici => {
      
      partici.cantidad = this.calculateCorredorTotal(partici.club);

    });


    this.inscripciones.forEach(partici => {
      
      partici.club = partici.cantidad?.toString().padStart(2, '0')+" "+partici.club;  

      if(partici.dorsal>1 && partici.dorsal<600){
        partici.color = "Naranjado";
      }else if(partici.dorsal>600 && partici.dorsal<1000){
        partici.color = "Amarillo";
      }else {
        partici.color = "";
      }

     
    });
    

  }

  
  calculateCorredorTotal(name:string) {
    let total = 0;

    if (this.inscripciones) {
        for (let partici of this.inscripciones) {
            if (partici.club === name) {
                total++;
            }

        }
    }
    
    return total;
}

}