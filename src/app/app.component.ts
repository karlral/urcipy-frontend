import { Component, OnInit } from '@angular/core';
import system from './service/helpersys';
import { RegionalService } from './service/regional.service';
import { Regional } from './domain/regional';
import { SystemService } from './service/system.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'URCI';
  regional: any = {};
  constructor(
    private regionalService: RegionalService,
    private systemService: SystemService
  ) {}
  ngOnInit(): void {
    // console.log(this.title+': '+system);
    this.regional = this.systemService.getSystem();
    if (this.regional == null) {
      this.regionalService.obtenerRegionalPub(system).subscribe({
        next: (dato: any) => {
          this.regional = dato;

          this.systemService.setSystem(this.regional);
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => console.info('completo carga de regionales'),
      });
    }
  }
}
