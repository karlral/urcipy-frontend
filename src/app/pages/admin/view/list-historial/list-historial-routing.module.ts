import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListHistorialComponent } from './list-historial.component';

const routes: Routes = [
  {
    path:'',
    component:ListHistorialComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListHistorialRoutingModule { }
