import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventoRemeraComponent } from './evento-remera.component';

const routes: Routes = [
  {
    path: '',
    component: EventoRemeraComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventoRemeraRoutingModule { }
