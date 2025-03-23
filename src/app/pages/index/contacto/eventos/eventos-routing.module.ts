import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosComponent } from './eventos.component';
import { ResultadosComponent } from './resultados/resultados.component';

const routes: Routes = [{
  path:'',
  component:EventosComponent,
  pathMatch:'full'
},
{
  path:'resultados/:idevento',
  component:ResultadosComponent,
  pathMatch:'full'
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventosRoutingModule { }
