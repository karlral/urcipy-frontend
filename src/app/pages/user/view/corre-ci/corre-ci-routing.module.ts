import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorreCiComponent } from './corre-ci.component';

const routes: Routes = [

  {
    path:'',
    component:CorreCiComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorreCiRoutingModule { }
