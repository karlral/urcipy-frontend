import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { CampeonesComponent } from './campeones/campeones.component';

const routes: Routes = [
  
  {
    path:'',
    component:BlogComponent,
    pathMatch:'full'
  },
  {
    path:'campeones/:anho/:idcat',
    component:CampeonesComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
