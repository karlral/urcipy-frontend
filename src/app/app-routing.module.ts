import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/index/blog/blog.component';
import { CategoriasComponent } from './pages/index/contacto/categorias/categorias.component';
import { ContactoComponent } from './pages/index/contacto/contacto.component';
import { EventosComponent } from './pages/index/contacto/eventos/eventos.component';
import { ResultadosComponent } from './pages/index/contacto/eventos/resultados/resultados.component';
import { PuntajecorredorComponent } from './pages/index/contacto/categorias/puntajecorredor/puntajecorredor.component';
import { EventobusComponent } from './pages/index/portafolio/eventobus/eventobus.component';
import { InscripcionesComponent } from './pages/index/portafolio/inscripciones/inscripciones.component';

import { PortafolioComponent } from './pages/index/portafolio/portafolio.component';
import { ResumenComponent } from './pages/index/resumen/resumen.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ClubpuntajeComponent } from './pages/index/contacto/clubpuntaje/clubpuntaje.component';
import { ClubpuntajedetComponent } from './pages/index/contacto/clubpuntaje/clubpuntajedet/clubpuntajedet.component';
import { CampeonesComponent } from './pages/index/blog/campeones/campeones.component';



const routes: Routes = [

  {
    path:'sistema1',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'sistema',
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
    path:'portfolio',
    component:PortafolioComponent,
    pathMatch:'full'
  },{
    path:'eventobus/:idevento',
    component:EventobusComponent,
    pathMatch:'full'
  },{
    path:'inscripciones/:activo',
    component:InscripcionesComponent,
    pathMatch:'full'
  },{
    path:'contact',
    component:ContactoComponent,
    pathMatch:'full'
  },{
    path:'puntos/:idcorredor',
    component:PuntajecorredorComponent,
    pathMatch:'full'
  },
  {
    path:'categorias',
    component:CategoriasComponent,
    pathMatch:'full'
  },
  {
    path:'eventos',
    component:EventosComponent,
    pathMatch:'full'
  },
  {
    path:'resultados/:idevento',
    component:ResultadosComponent,
    pathMatch:'full'
  },
  {
    path:'clubpuntaje/:tipo',
    component:ClubpuntajeComponent,
    pathMatch:'full'
  },
  {
    path:'clubpuntajedet/:tipo/:idclub',
    component:ClubpuntajedetComponent,
    pathMatch:'full'
  },
  {
    path:'blog',
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
