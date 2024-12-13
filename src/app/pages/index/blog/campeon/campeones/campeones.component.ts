import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Campeones } from 'src/app/domain/campeones';
import { Categoriah } from 'src/app/domain/categoriah';
import { Club } from 'src/app/domain/club';
import { Regional } from 'src/app/domain/regional';
import { CampeonesService } from 'src/app/service/campeones.service';
import baserUrl from 'src/app/service/helper';

@Component({
  selector: 'app-campeones',
  templateUrl: './campeones.component.html',
  styleUrls: ['./campeones.component.css']
})
export class CampeonesComponent  implements OnInit {
  campeoness!:Campeones[];

  mediaLocation = `${baserUrl}/media/`;



  anho!:number;
  idcat!:number;

  categoriah:Categoriah={
    idcategoriah: 0,
    nomcategoria: '',
    nomcorto: '',
    ano: 0
  }
  regional:Regional={
    idregional: 0,
    nomregional: '',
    nomcorto: '',
    logo: ''
  }

  club:Club={
    idclub: 0,
    nomclub: '',
    presidente: '',
    telepresi: '',
    vicepresidente: '',
    telvice: '',
    telefono: '',
    email: '',
    ruta: '',
    rutagrande: '',
    regional: this.regional
  }

  campeon:Campeones={
    idcampeones: 0,
    nombre: '',
    apellido: '',
    nacionalidad: '',
    ano: 0,
    peso: 0,
    altura: 0,
    bici: '',
    velmedia: '',
    puntos: 0,
    puesto: 0,
    rutabici: '',
    ruta: '',
    promedio: undefined,
    kmts: 0,
    cantidad: 0,
    categoriah: this.categoriah,
    club: this.club
  }
  

  constructor(private activatedRoute:ActivatedRoute,
    private campeonesService: CampeonesService
  ) { }

 ngOnInit(): void {
 
  this.idcat=this.activatedRoute.snapshot.params["idcat"];

  this.campeonesService.listaCampeonesAnhoCat(this.idcat).subscribe(
     {
       next: (dato: Campeones[]) => {
         this.campeoness = dato;
       
          this.campeon=this.campeoness[0];
       },
       error: (error) => {
         console.log(error);
         
       },
       complete: () => console.info('completo carga de categorias')
     });
   
 }

}