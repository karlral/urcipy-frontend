import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcesarDorsalRoutingModule } from './procesar-dorsal-routing.module';
import { ProcesarDorsalComponent } from './procesar-dorsal.component';

import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    ProcesarDorsalComponent
  ],
  imports: [
    CommonModule,
    ProcesarDorsalRoutingModule,

    MessagesModule,
                 ToastModule,
                 DialogModule,
                 ConfirmDialogModule,
                 ButtonModule,
                 TableModule
  ]
})
export class ProcesarDorsalModule { }
