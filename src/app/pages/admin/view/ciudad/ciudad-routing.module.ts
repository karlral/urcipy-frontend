import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CiudadComponent } from './ciudad.component';

const routes: Routes = [
   {
          path:'',
          component:CiudadComponent,
          pathMatch:'full'
        }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CiudadRoutingModule { }
