import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumenComponent } from './resumen.component';

const routes: Routes = [
  {
    path:'',
    component:ResumenComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumenRoutingModule { }
