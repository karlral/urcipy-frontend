import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcesarResultadoRoutingModule } from './procesar-resultado-routing.module';
import { ProcesarResultadoComponent } from './procesar-resultado.component';

import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    ProcesarResultadoComponent
  ],
  imports: [
    CommonModule,
    ProcesarResultadoRoutingModule,
    MessagesModule,
                 ToastModule,
                 DialogModule,
                 ConfirmDialogModule,
                 ButtonModule,
                 TableModule
  ]
})
export class ProcesarResultadoModule { }
