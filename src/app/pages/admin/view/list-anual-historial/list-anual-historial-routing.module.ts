import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAnualHistorialComponent } from './list-anual-historial.component';

const routes: Routes = [
  {
    path:'',
    component:ListAnualHistorialComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListAnualHistorialRoutingModule { }
