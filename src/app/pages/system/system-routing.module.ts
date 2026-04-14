import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RolComponent } from './rol/rol.component';
import { UsuarioRolComponent } from './usuario-rol/usuario-rol.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },{
    path:'signup',
    component:SignupComponent,
    pathMatch:'full'
  },{
    path:'',
    component:LoginComponent,
    pathMatch:'full'
  },{
    path:'rol',
    component: RolComponent
  },{
    path:'usuario-rol',
    component: UsuarioRolComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
