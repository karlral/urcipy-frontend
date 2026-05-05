import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampeonatoComponent } from './campeonato.component';

const routes: Routes = [
  {
    path: '',
    component: CampeonatoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampeonatoRoutingModule { }
