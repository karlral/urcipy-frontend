import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventobusninoComponent } from './eventobusnino.component';

const routes: Routes = [
  {
        path:':idevento',
        component:EventobusninoComponent,
        pathMatch:'full'
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventobusninoRoutingModule { }
