import { Component, Input, OnInit } from '@angular/core';
import { Participante } from 'src/app/domain/participante';
import baserUrl from 'src/app/service/helper';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit{
 
  mediaLocation = `${baserUrl}/media/`;

  @Input()  participantes!:Participante[];

   ngOnInit(): void {
//    console.log(this.participantes);
    this.participantes.forEach(partici => {
      
      partici.corredor.club.cantidad = this.calculateCorredorTotal(partici.corredor.club.nomclub);

    });


    this.participantes.forEach(partici => {
      
      partici.corredor.club.nomclub = partici.corredor.club.cantidad?.toString().padStart(2, '0')+" "+partici.corredor.club.nomclub;  

     
    });
    

  }

  
  calculateCorredorTotal(name:string) {
    let total = 0;

    if (this.participantes) {
        for (let partici of this.participantes) {
            if (partici.corredor.club.nomclub === name) {
                total++;
            }

        }
    }
    
    return total;
}

}
