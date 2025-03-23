import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { CategoriasComponent } from './categorias.component';
import { PuntajecorredorComponent } from './puntajecorredor/puntajecorredor.component';


@NgModule({
  declarations: [
    CategoriasComponent,
    PuntajecorredorComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
        TableModule,
        ButtonModule
  ]
})
export class CategoriasModule { }
