import { Component, OnInit } from '@angular/core';
import baserUrl from 'src/app/service/helper';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit{
  

  mediaLocation = `${baserUrl}/media/`;
  regional:any;
  constructor( 
    private systemService:SystemService
    ) { }
ngOnInit(): void {
  this.regional=this.systemService.getSystem();

    
  }

  
}
