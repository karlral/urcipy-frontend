import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListHistorialRoutingModule } from './list-historial-routing.module';
import { ListHistorialComponent } from './list-historial.component';
import { MessagesModule } from 'primeng/messages';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [
    ListHistorialComponent,
  ],
  imports: [
    CommonModule,
    ListHistorialRoutingModule,
    MessagesModule,
    ButtonModule,
    TableModule,
  
  ]
})
export class ListHistorialModule { }
