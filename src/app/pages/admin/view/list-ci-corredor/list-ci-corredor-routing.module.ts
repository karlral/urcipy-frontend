import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCiCorredorComponent } from './list-ci-corredor.component';

const routes: Routes = [
  {
    path:'',
    component:ListCiCorredorComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListCiCorredorRoutingModule { }
