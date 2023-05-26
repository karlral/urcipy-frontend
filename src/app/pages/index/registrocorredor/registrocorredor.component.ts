import { Component, OnInit } from '@angular/core';

import baserUrl from 'src/app/service/helper';

@Component({
  selector: 'app-registrocorredor',
  templateUrl: './registrocorredor.component.html',
  styleUrls: ['./registrocorredor.component.css']
})
export class RegistrocorredorComponent implements OnInit{
  mediaLocation = `${baserUrl}/media/`;
  
  

  constructor( 
    
    
    ) { }
  
  ngOnInit(): void {

    
  }
}
