import { Component, OnInit } from '@angular/core';
import { Anhocat } from 'src/app/domain/custom/anhocat';
import { CampeonesService } from 'src/app/service/campeones.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent  implements OnInit {
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

