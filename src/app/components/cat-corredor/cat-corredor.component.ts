import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Categoria } from 'src/app/domain/categoria';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-cat-corredor',
  templateUrl: './cat-corredor.component.html',
  styleUrls: ['./cat-corredor.component.css']
})
export class CatCorredorComponent implements OnInit, OnChanges{

@Input() fecnac:any ;
@Input() sexo:any ;
@Input() tipocat:any;

@Output() emitCategoria = new EventEmitter<Categoria>();

categorias: Categoria[] = [];

  categoria: Categoria={
    idcategoria: 0,
    nomcategoria: 'No encontrado',
    activo: false,
    nomcorto: '',
    orden: 0,
    tanda: 0,
    ascenso: false,
    activonacional: 0,
    edadinicio: 0,
    edadfin: 0,
    sexo: 0,
    tipo: 0
  };

constructor(
  private categoriaService: CategoriaService){}
  ngOnInit(): void {
    this.categoriaService.listarCategoriaes().subscribe(
      {
        next: (dato: Categoria[]) => {
          this.categorias = dato;
         
        },
        error: (error) => {
          console.log(error);
          
        },
        complete: () => console.info('completo carga de categorias')
      });

  }

ngOnChanges(changes: SimpleChanges): void {
//console.log("entro cambios");
this.categoria={
  idcategoria: 0,
  nomcategoria: 'No encontrado',
  activo: false,
  nomcorto: '',
  orden: 0,
  tanda: 0,
  ascenso: false,
  activonacional: 0,
  edadinicio: 0,
  edadfin: 0,
  sexo: 0,
  tipo: 0
};
  if(this.fecnac){
    var fechaActual:Date = new Date(); 
    let edad = fechaActual.getFullYear()-this.fecnac.getFullYear();
    
    if(this.sexo){
     
      if(this.tipocat){
        

        for (let index = 0; index < this.categorias.length; index++) {
          const element = this.categorias[index];
          

          if(element.sexo==this.sexo && element.tipo==this.tipocat  && edad>=element.edadinicio && edad<=element.edadfin){
            this.categoria=element;
           
           this.emitCategoria.emit(element);
            break;
          }
            
        }
        
      }
    }
  }
}
}
