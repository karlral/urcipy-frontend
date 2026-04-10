import { Component, Input, OnInit } from '@angular/core';

import baserUrl from 'src/app/service/helper';

@Component({
  selector: 'app-registrocorredornino',
  templateUrl: './registrocorredornino.component.html',
  styleUrls: ['./registrocorredornino.component.css']
})
export class RegistrocorredorninoComponent implements OnInit{
  mediaLocation = `${baserUrl}/media/`;
  
  @Input() participante:any=null;

  constructor( 
    
    
    ) { }
  
  ngOnInit(): void {

    
  }
}