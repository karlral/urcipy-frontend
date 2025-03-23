import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventobusComponent } from './eventobus.component';

const routes: Routes = [
  {
      path:':idevento',
      component:EventobusComponent,
      pathMatch:'full'
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventobusRoutingModule { }
