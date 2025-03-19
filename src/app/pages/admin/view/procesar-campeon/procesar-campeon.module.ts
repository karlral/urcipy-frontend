import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcesarCampeonRoutingModule } from './procesar-campeon-routing.module';

import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { ProcesarCampeonComponent } from './procesar-campeon.component';

@NgModule({
  declarations: [
    ProcesarCampeonComponent
  ],
  imports: [
    CommonModule,
    ProcesarCampeonRoutingModule,
             MessagesModule,
             ToastModule,
             DialogModule,
             ConfirmDialogModule,
             ButtonModule,
  ]
})
export class ProcesarCampeonModule { }
