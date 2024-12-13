import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargaHistorialComponent } from './carga-historial.component';

const routes: Routes = [
  {
    path:'',
    component:CargaHistorialComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CargaHistorialRoutingModule { }
