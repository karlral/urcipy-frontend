import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscripcionesrunComponent } from './inscripcionesrun.component';

const routes: Routes = [
  {

            path:':activo',
            component:InscripcionesrunComponent,
            pathMatch:'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionesrunRoutingModule { }
