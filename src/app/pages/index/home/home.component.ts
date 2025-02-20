import { Component, OnInit } from '@angular/core';
import { Regional } from 'src/app/domain/regional';
import baserUrl from 'src/app/service/helper';
import system from 'src/app/service/helpersys';
import { RegionalService } from 'src/app/service/regional.service';
import { SystemService } from 'src/app/service/system.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  mediaLocation = `${baserUrl}/media/`;

  regional:any={};
 
  constructor(private regionalService:RegionalService,
    private systemService:SystemService
  ){
    
  }
  ngOnInit(): void {
    
    this.regionalService.obtenerRegionalPub(system).subscribe(
      {
        next: (dato: any) => {
          this.regional=dato;
          
          this.systemService.setSystem(this.regional);   
          
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => console.info('completo carga de regionales')
      });
      
  }


}
