import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCampeonesRoutingModule } from './list-campeones-routing.module';
import { ListCampeonesComponent } from './list-campeones.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    ListCampeonesComponent
  ],
  imports: [
    CommonModule,
    ListCampeonesRoutingModule,
    ButtonModule,
    TableModule,
  ]
})
export class ListCampeonesModule { }
