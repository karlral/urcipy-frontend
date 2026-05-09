import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscriptardioRoutingModule } from './inscriptardio-routing.module';
import { InscriptardioComponent } from './inscriptardio.component';


@NgModule({
  declarations: [
    InscriptardioComponent
  ],
  imports: [
    CommonModule,
    InscriptardioRoutingModule
  ]
})
export class InscriptardioModule { }
