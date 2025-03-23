import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventobusrunComponent } from './eventobusrun.component';

const routes: Routes = [
  {
          path:':idevento',
          component:EventobusrunComponent,
          pathMatch:'full'
        },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventobusrunRoutingModule { }
