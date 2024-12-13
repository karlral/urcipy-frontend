import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCampeonesComponent } from './list-campeones.component';

const routes: Routes = [
  {
    path:'',
    component:ListCampeonesComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListCampeonesRoutingModule { }
