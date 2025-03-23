import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './categorias.component';
import { PuntajecorredorComponent } from './puntajecorredor/puntajecorredor.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriasComponent,
    pathMatch: 'full'
  }
  ,{
    path:'puntos/:idcorredor',
    component:PuntajecorredorComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
