import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { PuntajecorredorComponent } from './categorias/puntajecorredor/puntajecorredor.component';
import { ClubpuntajeComponent } from './clubpuntaje/clubpuntaje.component';
import { ClubpuntajedetComponent } from './clubpuntaje/clubpuntajedet/clubpuntajedet.component';
import { ContactoComponent } from './contacto.component';
import { EventosComponent } from './eventos/eventos.component';
import { ResultadosComponent } from './eventos/resultados/resultados.component';

const routes: Routes = [
  {
    path:'',
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactoRoutingModule { }
