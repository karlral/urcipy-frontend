import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventoCategoriaComponent } from './evento-categoria.component';

const routes: Routes = [
  {
    path: '',
    component: EventoCategoriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventoCategoriaRoutingModule { }
