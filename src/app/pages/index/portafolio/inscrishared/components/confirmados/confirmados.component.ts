import { Component, Input } from '@angular/core';
import { Inscripcion } from 'src/app/domain/custom/inscripcion';


@Component({
  selector: 'app-confirmados',
  templateUrl: './confirmados.component.html',
  styleUrls: ['./confirmados.component.css']
})
export class ConfirmadosComponent {
 
  

  @Input()  inscripciones!:Inscripcion[];

   
}
