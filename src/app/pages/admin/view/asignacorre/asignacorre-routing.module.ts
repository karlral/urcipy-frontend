import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignacorreComponent } from './asignacorre.component';

const routes: Routes = [
  {path: '',
    component: AsignacorreComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsignacorreRoutingModule { }
