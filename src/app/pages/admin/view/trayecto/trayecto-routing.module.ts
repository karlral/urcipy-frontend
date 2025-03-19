import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrayectoComponent } from './trayecto.component';

const routes: Routes = [
  {
    path: '',
    component: TrayectoComponent,
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrayectoRoutingModule { }
