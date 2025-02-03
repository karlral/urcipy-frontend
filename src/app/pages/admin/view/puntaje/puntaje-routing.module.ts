import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PuntajeComponent } from './puntaje.component';

const routes: Routes = [
  {
      path:'',
      component:PuntajeComponent
      
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PuntajeRoutingModule { }
