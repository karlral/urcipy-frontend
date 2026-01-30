import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  {
    path:'', loadChildren:()=> import('./pages/index/principal/principal.module').then(m => m.PrincipalModule)
  },
  {
    path: 'secundario',
    loadChildren: () => import('./pages/index/secundario/secundario.module').then(m => m.SecundarioModule)
  },
  {
    path:'sistema', loadChildren:()=> import('./pages/system/system.module').then(m => m.SystemModule)
  },  {
    path:'admin', loadChildren:()=> import('./pages/admin/admin.module').then(m => m.AdminModule)
  },{
    path:'user',loadChildren:()=> import('./pages/user/user.module').then(m => m.UserModule)
  },{
    path:'time',loadChildren:()=> import('./pages/time/time.module').then(m => m.TimeModule)
  },{
    path:'timepagos',loadChildren:()=> import('./pages/timepagos/timepagos.module').then(m => m.TimepagosModule)
  },{
    path:'resumen', loadChildren:()=> import('./pages/index/resumen/resumen.module').then(m => m.ResumenModule)
  },{
    path:'portfolio', loadChildren:()=> import('./pages/index/portafolio/portafolio.module').then(m => m.PortafolioModule)
  },{
    path:'contact', loadChildren:()=> import('./pages/index/contacto/contacto.module').then(m => m.ContactoModule)
  },{
    path:'blog', loadChildren:()=> import('./pages/index/blog/blog.module').then(m => m.BlogModule)
  },{
    path:'asociados', loadChildren:()=> import('./pages/index/asociados/asociados.module').then(m => m.AsociadosModule)
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
