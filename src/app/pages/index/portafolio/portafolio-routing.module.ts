import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioComponent } from './portafolio.component';

const routes: Routes = [
  {
    path:'',
    component:PortafolioComponent,
    pathMatch:'full'
  },
  {
    path:'eventobus',loadChildren:()=> import('./eventobus/eventobus.module').then(m => m.EventobusModule)
  } ,
  {
    path:'eventobusrun',loadChildren:()=> import('./eventobusrun/eventobusrun.module').then(m => m.EventobusrunModule)
  } ,
  {
    path:'inscripciones',loadChildren:()=> import('./inscripciones/inscripciones.module').then(m => m.InscripcionesModule)
  }
  ,
  {
    path:'eventobusnino',loadChildren:()=> import('./eventobusnino/eventobusnino.module').then(m => m.EventobusninoModule)
  } ,
  {
    path:'inscripcionesnino',loadChildren:()=> import('./inscripcionesnino/inscripcionesnino.module').then(m => m.InscripcionesninoModule)
  } 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortafolioRoutingModule { }
