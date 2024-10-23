import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCiHistorialRoutingModule } from './list-ci-historial-routing.module';
import { ListCiHistorialComponent } from './list-ci-historial.component';

import { MessagesModule } from 'primeng/messages';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { SharedModule } from 'src/app/shared/shared.module';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    ListCiHistorialComponent
  ],
  imports: [
    CommonModule,
    ListCiHistorialRoutingModule,
    MessagesModule,
    ButtonModule,
    TableModule,
    SharedModule,
    ToastModule
  ]
})
export class ListCiHistorialModule { }
