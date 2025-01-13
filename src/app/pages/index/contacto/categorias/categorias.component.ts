import { Component, OnInit } from '@angular/core';
import { Puncorredor } from 'src/app/domain/custom/puncorredor';
import { ParticipanteService } from 'src/app/service/participante.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
   puncorredores!:Puncorredor[];

   constructor(private participanteService: ParticipanteService
   ) { }

  ngOnInit(): void {
   this.participanteService.pubListarPuntajeCorredor().subscribe(
      {
        next: (dato: Puncorredor[]) => {
          let i=0;
          let cat =dato[0].categoria;
          for (let valor of dato) {
            
            if (valor.categoria==cat){
              i=i+1;
              
            }else{
              i=1;
              cat=valor.categoria;
              
            }
            valor.orden=i;
          }
          this.puncorredores = dato;
          //console.log(this.puncorredores);
         
        },
        error: (error) => {
          console.log(error);
          
        },
        complete: () => console.info('completo carga de categorias')
      });
    
  }

 



  }
