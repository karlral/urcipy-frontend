import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubpuntajeComponent } from './clubpuntaje.component';
import { ClubpuntajedetComponent } from './clubpuntajedet/clubpuntajedet.component';

const routes: Routes = [
  
  {
    path:':tipo',
    component:ClubpuntajeComponent,
    pathMatch:'full'
  },
  {
    path:'det/:tipo/:idclub',
    component:ClubpuntajedetComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClubpuntajeRoutingModule { }
