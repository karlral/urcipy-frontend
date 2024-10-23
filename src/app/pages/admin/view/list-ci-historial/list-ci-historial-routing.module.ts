import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCiHistorialComponent } from './list-ci-historial.component';

const routes: Routes = [
  {
    path:'',
    component:ListCiHistorialComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListCiHistorialRoutingModule { }
