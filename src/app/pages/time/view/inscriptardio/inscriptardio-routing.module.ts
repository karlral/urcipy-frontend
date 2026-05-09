import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptardioComponent } from './inscriptardio.component';

const routes: Routes = [
  {
    path: '',
    component: InscriptardioComponent,
    

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscriptardioRoutingModule { }
