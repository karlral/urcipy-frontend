import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcesarResultadoComponent } from './procesar-resultado.component';

const routes: Routes = [
  {
      path:'',
      component:ProcesarResultadoComponent,
      pathMatch: 'full'
  
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcesarResultadoRoutingModule { }
