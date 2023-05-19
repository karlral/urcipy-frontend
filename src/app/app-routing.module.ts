import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/index/blog/blog.component';
import { ContactoComponent } from './pages/index/contacto/contacto.component';
import { PortafolioComponent } from './pages/index/portafolio/portafolio.component';
import { ResumenComponent } from './pages/index/resumen/resumen.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';



const routes: Routes = [

  {
    path:'',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'admin', loadChildren:()=> import('./pages/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path:'corre', loadChildren:()=> import('./pages/admin/view/corredor/corredor.module').then(m => m.CorredorModule)
  },
  {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full'
  },{
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },{
    path:'home',
    component:HomeComponent,
    pathMatch:'full'
  },{
    path:'user',
    component:UserDashboardComponent,
    pathMatch:'full'
  },{
    path:'resumen',
    component:ResumenComponent,
    pathMatch:'full'
  },{
    path:'portafolio',
    component:PortafolioComponent,
    pathMatch:'full'
  },{
    path:'contacto',
    component:ContactoComponent,
    pathMatch:'full'
  },{
    path:'blog',
    component:BlogComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
