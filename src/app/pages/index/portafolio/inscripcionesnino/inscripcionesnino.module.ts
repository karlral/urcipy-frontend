import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionesninoRoutingModule } from './inscripcionesnino-routing.module';
import { InscripcionesninoComponent } from './inscripcionesnino.component';
import { InscrisharedModule } from '../inscrishared/inscrishared.module';



@NgModule({
  declarations: [
    InscripcionesninoComponent,
  ],
  imports: [
    CommonModule,
    InscripcionesninoRoutingModule,
    InscrisharedModule
    
  ]
})
export class InscripcionesninoModule { }
