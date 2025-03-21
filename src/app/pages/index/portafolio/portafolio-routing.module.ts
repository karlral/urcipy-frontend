import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventobusComponent } from './eventobus/eventobus.component';
import { InscripcionesComponent } from './inscripciones/inscripciones.component';
import { PortafolioComponent } from './portafolio.component';
import { MembreciaComponent } from './membrecia/membrecia.component';
import { EventobusrunComponent } from './eventobusrun/eventobusrun.component';
import { InscripcionesninoComponent } from './inscripcionesnino/inscripcionesnino.component';
import { EventobusninoComponent } from './eventobusnino/eventobusnino.component';

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
  },
  {
    path:'eventobusrun/:idevento',
    component:EventobusrunComponent,
    pathMatch:'full'
  },{
    path:'inscripciones/:activo',
    component:InscripcionesComponent,
    pathMatch:'full'
  },
  {
    path:'eventobusnino/:idevento',
    component:EventobusninoComponent,
    pathMatch:'full'
  },{
    path:'inscripcionesnino/:activo',
    component:InscripcionesninoComponent,
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
