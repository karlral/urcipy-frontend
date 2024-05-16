import { Component, OnInit } from '@angular/core';
import { Regional } from 'src/app/domain/regional';
import baserUrl from 'src/app/service/helper';
import { RegionalService } from 'src/app/service/regional.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent  implements OnInit{
  

  mediaLocation = `${baserUrl}/media/`;
  regional:Regional={
    idregional: 0,
    nomregional: '',
    nomcorto: '',
    logo: ''
  }
  constructor( 
    private regionalService:RegionalService
    ) { }
ngOnInit(): void {
  this.regionalService.obtenerRegionalPub(1).subscribe(
    {
      next: (r: Regional) => {
        this.regional = r;
       
        
      },
      error: (error) => {
        console.log(error);
        
      },
      complete: () => console.info('completo evento')
    });

    
  }

  
}


