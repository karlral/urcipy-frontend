import { Component, Input, OnInit } from '@angular/core';
import { Corredorank } from 'src/app/domain/custom/corredorank';
import { Inscripcion } from 'src/app/domain/custom/inscripcion';
import baserUrl from 'src/app/service/helper';
import { MovimientoService } from 'src/app/service/movimiento.service';

@Component({
  selector: 'app-asociados',
  templateUrl: './asociados.component.html',
  styleUrls: ['./asociados.component.css']
})
export class AsociadosComponent implements OnInit{
  mediaLocation = `${baserUrl}/media/`;

  corredorankes: Corredorank[] = [];
 
  constructor(private movimientoService: MovimientoService ){}

   ngOnInit(): void {

    this.movimientoService.listarMovimientosRankingPub().subscribe(
      {
        next: (datos: Corredorank[]) => {
          this.corredorankes = datos;
          this.calcularCantidades();
         
        },
        error: (error) => {
          console.log(error);
          
        },
        complete: () => console.info('completo movimiento')
      });

   
    

  }

  calcularCantidades(){
    this.corredorankes.forEach(corre => {
      
      corre.cantidad = this.calculateCorredorTotal(corre.club);

    });


    this.corredorankes.forEach(corre => {
      
      corre.club = corre.cantidad?.toString().padStart(2, '0')+" "+corre.club;  

     
    });
  }
  
  calculateCorredorTotal(name:string) {
    let total = 0;

    if (this.corredorankes) {
        for (let corre of this.corredorankes) {
            if (corre.club === name) {
                total++;
            }

        }
    }
    
    return total;
}

}
