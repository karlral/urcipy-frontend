import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionalRoutingModule } from './regional-routing.module';
import { RegionalComponent } from './regional.component';

import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';


@NgModule({
  declarations: [
    RegionalComponent
  ],
  imports: [
    CommonModule,
    RegionalRoutingModule,
        FormsModule,
            InputTextModule,
            MessagesModule,
            ToastModule,
            TableModule,
            DialogModule,
            ConfirmDialogModule,
            ButtonModule,
            InputTextareaModule
  ]
})
export class RegionalModule { }
