import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventoTipoComponent } from './evento-tipo.component';

const routes: Routes = [
  {
      path: '',
      component: EventoTipoComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventoTipoRoutingModule { }
