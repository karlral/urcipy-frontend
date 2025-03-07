import { Component, OnInit } from '@angular/core';
import baserUrl from 'src/app/service/helper';
import programsDataService from 'src/app/service/programs-data.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent  implements OnInit{
  
  mediaLocation = `${baserUrl}/media/`;
  programsData:any[]=[];
 
 
  constructor(){ }
  ngOnInit(): void { 
    this.programsData=programsDataService;
        
  }

  

}
