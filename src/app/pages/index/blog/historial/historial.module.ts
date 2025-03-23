import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistorialRoutingModule } from './historial-routing.module';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { SharedModule } from 'src/app/shared/shared.module';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { HistorialComponent } from './historial.component';


@NgModule({
  declarations: [
    HistorialComponent
  ],
  imports: [
    CommonModule,
    HistorialRoutingModule,
    MessagesModule,
    ButtonModule,
    TableModule,
    SharedModule,
    ToastModule
  ]
})
export class HistorialModule { }
