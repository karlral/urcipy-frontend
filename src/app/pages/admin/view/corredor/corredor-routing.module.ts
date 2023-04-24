import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorredorComponent } from './corredor.component';


const routes: Routes = [
  
  {
    path:'corre',
    component:CorredorComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorredorRoutingModule { }
