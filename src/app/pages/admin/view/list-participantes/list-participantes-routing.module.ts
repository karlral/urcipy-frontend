import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListParticipantesComponent } from './list-participantes.component';

const routes: Routes = [
    {
        path:':activo',
        component:ListParticipantesComponent,
        pathMatch:'full'
      }
      
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListParticipantesRoutingModule { }
