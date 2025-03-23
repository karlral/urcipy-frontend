import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembreciaComponent } from './membrecia.component';

const routes: Routes = [
  {
    path: '',
    component: MembreciaComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembreciaRoutingModule { }
