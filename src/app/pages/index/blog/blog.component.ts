import { Component, OnInit } from '@angular/core';
import baserUrl from 'src/app/service/helper';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent  implements OnInit{
  

  mediaLocation = `${baserUrl}/media/`;
  regional:any;
    constructor( 
      private systemService:SystemService
      ) { }
  ngOnInit(): void {
    this.regional=this.systemService.getSystem();
  
      
    }
  
}


