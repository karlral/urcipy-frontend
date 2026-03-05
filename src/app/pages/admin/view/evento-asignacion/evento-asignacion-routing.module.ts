import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventoAsignacionComponent } from './evento-asignacion.component';

const routes: Routes = [
  {
        path: '',
        component: EventoAsignacionComponent
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventoAsignacionRoutingModule { }
