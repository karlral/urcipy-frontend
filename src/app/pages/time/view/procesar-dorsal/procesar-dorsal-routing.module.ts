import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcesarDorsalComponent } from './procesar-dorsal.component';

const routes: Routes = [
  {
    path:'',
    component:ProcesarDorsalComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcesarDorsalRoutingModule { }
