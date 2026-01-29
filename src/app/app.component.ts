import { Component, OnInit } from '@angular/core';
import system from './service/helpersys';
import { RegionalService } from './service/regional.service';
import { SystemService } from './service/system.service';
import { Datasys } from './service/datasys';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Datasys]
})
export class AppComponent implements OnInit{
  regional: any = {};


  constructor(
    private regionalService: RegionalService,
    private systemService: SystemService,
    
  ) {}
  ngOnInit(): void {
    // console.log(this.title+': '+system);
    this.regional = this.systemService.getSystem();
    if (this.regional == null) {
      this.regionalService.obtenerRegionalPub(system).subscribe({
        next: (dato: any) => {

          this.systemService.setSystem(dato);
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => console.info('completo carga de regionales'),
      });
    }





   }
}