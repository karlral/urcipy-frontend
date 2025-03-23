import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscripcionesninoComponent } from './inscripcionesnino.component';

const routes: Routes = [
  {
            path:':activo',
            component:InscripcionesninoComponent,
            pathMatch:'full'
          },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionesninoRoutingModule { }
