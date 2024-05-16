import { Component, OnInit } from '@angular/core';
import { Anhocat } from 'src/app/domain/custom/anhocat';
import { CampeonesService } from 'src/app/service/campeones.service';

@Component({
  selector: 'app-campeon',
  templateUrl: './campeon.component.html',
  styleUrls: ['./campeon.component.css']
})
export class CampeonComponent implements OnInit {
  anhocats!:Anhocat[];

  constructor(private campeonesService: CampeonesService
  ) { }

 ngOnInit(): void {
  this.campeonesService.obtenerAnhoCategorias().subscribe(
     {
       next: (dato: Anhocat[]) => {
       
        
         this.anhocats = dato;
        
       },
       error: (error) => {
         console.log(error);
         
       },
       complete: () => console.info('completo carga de categorias')
     });
   
}
}
