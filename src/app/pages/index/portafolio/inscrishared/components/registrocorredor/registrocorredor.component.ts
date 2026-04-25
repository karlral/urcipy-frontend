import { Component, Input, OnInit } from '@angular/core';

import baserUrl from 'src/app/service/helper';

@Component({
  selector: 'app-registrocorredor',
  templateUrl: './registrocorredor.component.html',
  styleUrls: ['./registrocorredor.component.css']
})
export class RegistrocorredorComponent implements OnInit{
  mediaLocation = `${baserUrl}/media/`;
  
@Input() inscriptoparticipante:any=null;

  constructor( 
    
    
    ) { }
  
  ngOnInit(): void {

    
  }
}
