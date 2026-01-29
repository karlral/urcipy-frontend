import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecundarioComponent } from './secundario.component';

const routes: Routes = [
  {
    path: '',
    component: SecundarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecundarioRoutingModule { }
