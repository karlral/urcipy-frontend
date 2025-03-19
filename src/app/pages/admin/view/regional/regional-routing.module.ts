import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionComponent } from '../region/region.component';

const routes: Routes = [
   {
          path:'',
          component:RegionComponent,
          pathMatch:'full'
        }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionalRoutingModule { }
