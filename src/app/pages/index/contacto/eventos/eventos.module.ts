import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { EventosComponent } from './eventos.component';
import { ResultadosComponent } from './resultados/resultados.component';


@NgModule({
  declarations: [
    EventosComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule,
    EventosRoutingModule,
    TableModule,
    ButtonModule
  ]
})
export class EventosModule { }
