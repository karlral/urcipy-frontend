import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { CampeonesComponent } from './campeon/campeones/campeones.component';
import { CampeonComponent } from './campeon/campeon.component';
import { HistorialComponent } from './historial/historial.component';

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
  },
  {
    path:'campeon',
    component:CampeonComponent,
    pathMatch:'full'
  },
  {
    path:'historial',
    component:HistorialComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
