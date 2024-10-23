import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListAnualHistorialRoutingModule } from './list-anual-historial-routing.module';
import { ListAnualHistorialComponent } from './list-anual-historial.component';
import { MessagesModule } from 'primeng/messages';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    ListAnualHistorialComponent
  ],
  imports: [
    CommonModule,
    ListAnualHistorialRoutingModule,
    MessagesModule,
    ButtonModule,
    TableModule,
  
  ]
})
export class ListAnualHistorialModule { }
