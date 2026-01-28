import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoRoutingModule } from './tipo-routing.module';
import { TipoComponent } from './tipo.component';
import { AddEditTipoComponent } from './add-edit-tipo/add-edit-tipo.component';

import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TipoComponent,
    AddEditTipoComponent
  ],
  imports: [
    CommonModule,
    TipoRoutingModule,

    TableModule,
    InputTextModule,
    MessagesModule,
    ToastModule,
    ButtonModule,
    ConfirmDialogModule,
    InputNumberModule,
    DialogModule,
    ReactiveFormsModule,
  ]
})
export class TipoModule { }
