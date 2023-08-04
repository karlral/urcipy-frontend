import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';




const routes: Routes = [

  {
    path:'user',
    component:UserDashboardComponent,
    pathMatch:'full'
  } ,
  {
    path:'sistema', loadChildren:()=> import('./pages/system/system.module').then(m => m.SystemModule)
  },  {
    path:'admin', loadChildren:()=> import('./pages/admin/admin.module').then(m => m.AdminModule)
  },{
    path:'resumen', loadChildren:()=> import('./pages/index/resumen/resumen.module').then(m => m.ResumenModule)
  },{
    path:'portfolio', loadChildren:()=> import('./pages/index/portafolio/portafolio.module').then(m => m.PortafolioModule)
  },{
    path:'contact', loadChildren:()=> import('./pages/index/contacto/contacto.module').then(m => m.ContactoModule)
  },{
    path:'blog', loadChildren:()=> import('./pages/index/blog/blog.module').then(m => m.BlogModule)
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
