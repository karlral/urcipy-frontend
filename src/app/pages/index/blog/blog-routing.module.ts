import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';


const routes: Routes = [
  
  {
    path:'',
    component:BlogComponent,
    pathMatch:'full'
  },
  {
    path:'historial',
    loadChildren:()=> import('./historial/historial.module').then(m=>m.HistorialModule)
  },
  {
    path:'campeon',
    loadChildren:()=> import('./campeon/campeon.module').then(m => m.CampeonModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
