import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsociadosRoutingModule } from './asociados-routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { AsociadosComponent } from './asociados.component';


@NgModule({
  declarations: [
    AsociadosComponent
  ],
  imports: [
    CommonModule,
    AsociadosRoutingModule,
    TableModule,
     ButtonModule,
  ]
})
export class AsociadosModule { }
