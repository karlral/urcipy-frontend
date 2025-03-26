import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionalComponent } from './regional.component';

const routes: Routes = [
   {
          path:'',
          component:RegionalComponent,
          pathMatch:'full'
        }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionalRoutingModule { }
