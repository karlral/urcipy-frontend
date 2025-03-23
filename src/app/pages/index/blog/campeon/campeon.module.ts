import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampeonRoutingModule } from './campeon-routing.module';
import { ca } from 'date-fns/locale';
import { CampeonComponent } from './campeon.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    CampeonComponent
  ],
  imports: [
    CommonModule,
    CampeonRoutingModule,
    TableModule,
    ButtonModule
  ]
})
export class CampeonModule { }
