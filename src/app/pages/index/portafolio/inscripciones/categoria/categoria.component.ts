import { Component, Input } from '@angular/core';
import { Inscripcion } from 'src/app/domain/custom/inscripcion';
import baserUrl from 'src/app/service/helper';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {

  mediaLocation = `${baserUrl}/media/`;

@Input()  inscripciones!:Inscripcion[];

calculateCategoriaTotal(name:string) {
  let total = 0;

  if (this.inscripciones) {
      for (let partici of this.inscripciones) {
          if (partici.categoria === name) {
              total++;
          }
      }
  }

  return total;
}

}
