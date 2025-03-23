import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { CategoriasComponent } from './categorias.component';


@NgModule({
  declarations: [
    CategoriasComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
        TableModule,
        ButtonModule
  ]
})
export class CategoriasModule { }
