import { Component, Input } from '@angular/core';
import { Categoria } from 'src/app/domain/categoria';

@Component({
  selector: 'app-tandas',
  templateUrl: './tandas.component.html',
  styleUrls: ['./tandas.component.css']
})
export class TandasComponent {

  

@Input()  categorias!:Categoria[];


}
