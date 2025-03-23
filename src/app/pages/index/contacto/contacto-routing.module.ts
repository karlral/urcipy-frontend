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
  },
  {
    path:'categorias',
    loadChildren: () => import('./categorias/categorias.module').then(m => m.CategoriasModule)
  },
{
  path:'clubpuntaje',
  loadChildren: () => import('./clubpuntaje/clubpuntaje.module').then(m => m.ClubpuntajeModule)
}
  ,
  {
    path:'eventos',
    loadChildren: () => import('./eventos/eventos.module').then(m => m.EventosModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactoRoutingModule { }
