import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionesrunRoutingModule } from './inscripcionesrun-routing.module';
import { InscripcionesrunComponent } from './inscripcionesrun.component';
import { InscrisharedModule } from '../inscrishared/inscrishared.module';


@NgModule({
  declarations: [
    InscripcionesrunComponent
  ],
  imports: [
    CommonModule,
    InscripcionesrunRoutingModule,
    InscrisharedModule
  ]
})
export class InscripcionesrunModule { }
