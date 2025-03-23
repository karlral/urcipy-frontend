import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ClubComponent } from './components/club/club.component';
import { TandasComponent } from './components/tandas/tandas.component';
import { RegistrocorredorComponent } from './components/registrocorredor/registrocorredor.component';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    CategoriaComponent,
    ClubComponent,
    TandasComponent,
    RegistrocorredorComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule
  ],
  exports:[
    CategoriaComponent,
    ClubComponent,
    TandasComponent,
    RegistrocorredorComponent
  ]
})
export class InscrisharedModule { }
