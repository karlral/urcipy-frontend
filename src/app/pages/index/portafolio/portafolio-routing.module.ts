import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventobusComponent } from './eventobus/eventobus.component';
import { InscripcionesComponent } from './inscripciones/inscripciones.component';
import { PortafolioComponent } from './portafolio.component';
import { MembreciaComponent } from './membrecia/membrecia.component';

const routes: Routes = [
  {
    path:'',
    component:PortafolioComponent,
    pathMatch:'full'
  },
  {
    path:'membresia',
    component:MembreciaComponent,
    pathMatch:'full'
  },
  {
    path:'eventobus/:idevento',
    component:EventobusComponent,
    pathMatch:'full'
  },{
    path:'inscripciones/:activo',
    component:InscripcionesComponent,
    pathMatch:'full'
  }
  ,{
    path:'membrecia',
    component:MembreciaComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortafolioRoutingModule { }
