import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ca } from 'date-fns/locale';
import { Categoria } from 'src/app/domain/categoria';
import { CategoriaService } from 'src/app/service/categoria.service';
import { EventoTipoService } from 'src/app/service/evento-tipo.service';

@Component({
  selector: 'app-cat-corredor',
  templateUrl: './cat-corredor.component.html',
  styleUrls: ['./cat-corredor.component.css']
})
export class CatCorredorComponent implements OnInit, OnChanges {

  @Input() fecnac: any;
  @Input() sexo: any;
  @Input() tipocat: any;
  @Input() idmodalidad: any;
  @Input() ci: any;
  @Input() categorias: Categoria[] = [];
  @Output() emitCategoria = new EventEmitter<Categoria>();

  ;


  
  categoria: any = {
    idcategoria: 0,
    nomcategoria: 'No encontrado',
    nomalternativo: '',
    
  };

  edad = 0;
  constructor(
    private categoriaService: CategoriaService) { }
  ngOnInit(): void {
   
  }

  
  ngOnChanges(changes: SimpleChanges): void {
    
    this.categoria = {
      idcategoria: 0,
      nomcategoria: 'No encontrado',
      nomalternativo: '',
    };
    if (this.fecnac) {
      var fechaActual: Date = new Date();
      this.edad = fechaActual.getFullYear() - this.fecnac.getFullYear();


      for (let index = 0; index < this.categorias.length; index++) {
        const element = this.categorias[index];

        if (element.sexo == this.sexo && element.tipo == this.tipocat && this.edad >= element.edadinicio && this.edad <= element.edadfin && element.modalidad.idmodalidad == this.idmodalidad) {
          this.categoria = element;
          
          this.emitCategoria.emit(element);
          break;
        }


      }
    }
    this.emitCategoria.emit(this.categoria);  
  }
}
