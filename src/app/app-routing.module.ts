import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { NavigationComponent } from './pages/admin/navigation/navigation.component';
import { CategoriaComponent } from './pages/admin/view/categoria/categoria.component';
import { CiudadComponent } from './pages/admin/view/ciudad/ciudad.component';
import { ClubComponent } from './pages/admin/view/club/club.component';
import { CorredorComponent } from './pages/admin/view/corredor/corredor.component';
import { PaisComponent } from './pages/admin/view/pais/pais.component';
import { RegionalComponent } from './pages/admin/view/regional/regional.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './service/admin.guard';


const routes: Routes = [

  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },{
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
    path:'admin',
    component:NavigationComponent, canActivate:[AdminGuard],
    children:[
      
      {
        path:'',
        component:WelcomeComponent
      },{
        path:'pais',
        component:PaisComponent,
        
      },{
        path:'ciudad',
        component:CiudadComponent,
        
      },{
        path:'regional',
        component:RegionalComponent,
        
      },{
        path:'club',
        component:ClubComponent,
        
      },{
        path:'categoria',
        component:CategoriaComponent,
        
      },{
        path:'corredor',
        component:CorredorComponent,
        
      }
    ]
    
  },{
    path:'user',
    component:UserDashboardComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
