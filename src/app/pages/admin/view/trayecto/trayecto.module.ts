import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrayectoRoutingModule } from './trayecto-routing.module';
import { TrayectoComponent } from './trayecto.component';

import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    TrayectoComponent
  ],
  imports: [
    CommonModule,
    TrayectoRoutingModule,
    FormsModule,
        InputTextModule,
        MessagesModule,
        ToastModule,
        TableModule,
        DialogModule,
        ConfirmDialogModule,
        ButtonModule,

  ]
})
export class TrayectoModule { }
