import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsociadosComponent } from './asociados.component';

const routes: Routes = [
  {
    path:'',
    component: AsociadosComponent
  },
  {
    path:'membrecia',
    loadChildren: () => import('./membrecia/membrecia.module').then(m => m.MembreciaModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsociadosRoutingModule { }
