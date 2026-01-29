import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecundarioRoutingModule } from './secundario-routing.module';
import { SecundarioComponent } from './secundario.component';


@NgModule({
  declarations: [
    SecundarioComponent
  ],
  imports: [
    CommonModule,
    SecundarioRoutingModule
  ]
})
export class SecundarioModule { }
