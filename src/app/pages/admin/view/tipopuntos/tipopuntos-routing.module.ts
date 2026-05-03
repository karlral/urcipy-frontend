import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipopuntosComponent } from './tipopuntos.component';

const routes: Routes = [
  {
    path: '',
    component: TipopuntosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipopuntosRoutingModule { }
