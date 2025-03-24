import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  {
    path:'',loadChildren:()=> import('./pages/index/home/home.module').then(m => m.HomeModule)
  } ,{
    path:'sistema', loadChildren:()=> import('./pages/system/system.module').then(m => m.SystemModule)
  },  {
    path:'admin', loadChildren:()=> import('./pages/admin/admin.module').then(m => m.AdminModule)
  },{
    path:'user',loadChildren:()=> import('./pages/user/user.module').then(m => m.UserModule)
  },{
    path:'time',loadChildren:()=> import('./pages/time/time.module').then(m => m.TimeModule)
  },{
    path:'resumen', loadChildren:()=> import('./pages/index/resumen/resumen.module').then(m => m.ResumenModule)
  },{
    path:'resultados', loadChildren:()=> import('./pages/index/resultados/resultados.module').then(m => m.ResultadosModule)
  }
  ,{
    path:'portfolio', loadChildren:()=> import('./pages/index/portafolio/portafolio.module').then(m => m.PortafolioModule)
  },{
    path:'contact', loadChildren:()=> import('./pages/index/contacto/contacto.module').then(m => m.ContactoModule)
  },{
    path:'blog', loadChildren:()=> import('./pages/index/blog/blog.module').then(m => m.BlogModule)
  },{
    path:'about', loadChildren:()=> import('./pages/index/about/about.module').then(m => m.AboutModule)
  },{
    path:'services', loadChildren:()=> import('./pages/index/services/services.module').then(m => m.ServicesModule)
  },{
    path:'asociados', loadChildren:()=> import('./pages/index/asociados/asociados.module').then(m => m.AsociadosModule)
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
