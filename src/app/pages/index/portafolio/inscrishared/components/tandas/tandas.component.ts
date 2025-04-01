import { Component, Input } from '@angular/core';
import { Inscripcion } from 'src/app/domain/custom/inscripcion';
import baserUrl from 'src/app/service/helper';

@Component({
  selector: 'app-tandas',
  templateUrl: './tandas.component.html',
  styleUrls: ['./tandas.component.css']
})
export class TandasComponent {

  

  mediaLocation = `${baserUrl}/media/`;

@Input()  inscripciones!:Inscripcion[];

calculateTandaTotal(vtanda:number) {
  let total = 0;
  
  if (this.inscripciones) {
      for (let partici of this.inscripciones) {
          if (partici.tanda == vtanda) {
              total++;
          }
      }
  }

  return total;
}

}
