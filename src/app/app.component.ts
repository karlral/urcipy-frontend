import { Component, OnInit } from '@angular/core';
import system from './service/helpersys';
import { RegionalService } from './service/regional.service';
import { Regional } from './domain/regional';
import { SystemService } from './service/system.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'URCI';
  regional:Regional={
    idregional: 0,
    nomregional: '',
    nomcorto: '',
    telefono: '',
    direccion: '',
    email: '',
    ano: 0,
    presentacion: '',
    logo: ''
  };
  constructor(private regionalService:RegionalService,
    private systemService:SystemService
  ){
    
  }
  ngOnInit(): void {
    console.log(this.title+': '+system);
    this.regionalService.obtenerRegionalPub(system).subscribe(
      {
        next: (dato: any) => {
          this.regional=dato;
          
          this.systemService.setSystem(this.regional);
          this.title=this.regional.nomcorto;
          if(system==2){
            this.changeBackgroundImage();
          }
          
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => console.info('completo carga de regionales')
      });
      
  }

  changeBackgroundImage() {
    document.getElementById("fondo")?.classList.remove("bgScroll");
    document.getElementById("fondo")?.classList.add("bgScroll2");
    document.getElementById("trasparencia")?.classList.remove("opacity7");
    document.getElementById("trasparencia")?.classList.add("opacity3");
  }
}
