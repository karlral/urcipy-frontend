import { Component, Input } from '@angular/core';
import { Participante } from 'src/app/domain/participante';
import baserUrl from 'src/app/service/helper';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {

  mediaLocation = `${baserUrl}/media/`;

@Input()  participantes!:Participante[];

calculateCategoriaTotal(name:string) {
  let total = 0;

  if (this.participantes) {
      for (let partici of this.participantes) {
          if (partici.corredor.categoria.nomcorto === name) {
              total++;
          }
      }
  }

  return total;
}

}
