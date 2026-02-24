import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RankcorreComponent } from './rankcorre.component';

const routes: Routes = [
  {
    path: '',
    component: RankcorreComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RankcorreRoutingModule { }
