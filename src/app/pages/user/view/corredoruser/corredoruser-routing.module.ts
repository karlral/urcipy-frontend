import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorredoruserComponent } from './corredoruser.component';

const routes: Routes = [
  { 
    path: '',
    component: CorredoruserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorredoruserRoutingModule { }
