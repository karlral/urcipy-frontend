import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsociadosComponent } from './asociados.component';
import { MasinfoComponent } from './masinfo/masinfo.component';

const routes: Routes = [
  {
    path:'',
    component: AsociadosComponent
  },
  {
    path:'membrecia',
    loadChildren: () => import('./membrecia/membrecia.module').then(m => m.MembreciaModule)
  },
  
  {
    path:'masinfo',
    component: MasinfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsociadosRoutingModule { }
