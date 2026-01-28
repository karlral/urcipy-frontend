import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemeraComponent } from './remera.component';

const routes: Routes = [
  {
        path:'',
        component:RemeraComponent
        
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemeraRoutingModule { }
