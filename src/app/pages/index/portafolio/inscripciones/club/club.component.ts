import { Component, Input, OnInit } from '@angular/core';
import { Inscripcion } from 'src/app/domain/custom/inscripcion';
import baserUrl from 'src/app/service/helper';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit{
 
  mediaLocation = `${baserUrl}/media/`;

  @Input()  inscripciones!:Inscripcion[];

   ngOnInit(): void {

    this.inscripciones.forEach(partici => {
      
      partici.cantidad = this.calculateCorredorTotal(partici.club);

    });


    this.inscripciones.forEach(partici => {
      
      partici.club = partici.cantidad?.toString().padStart(2, '0')+" "+partici.club;  

     
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
