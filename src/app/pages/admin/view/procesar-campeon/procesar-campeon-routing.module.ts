import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcesarCampeonComponent } from './procesar-campeon.component';

const routes: Routes = [
  {
    path:'',
    component:ProcesarCampeonComponent,
    pathMatch: 'full'

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcesarCampeonRoutingModule { }
