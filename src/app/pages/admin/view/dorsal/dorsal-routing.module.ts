import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DorsalComponent } from './dorsal.component';

const routes: Routes = [
  {
      path:'',
      component:DorsalComponent,
      pathMatch:'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DorsalRoutingModule { }
