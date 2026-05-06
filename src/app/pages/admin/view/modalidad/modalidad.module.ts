import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalidadRoutingModule } from './modalidad-routing.module';
import { ModalidadComponent } from './modalidad.component';
import { AddEditModalidadComponent } from './add-edit-modalidad/add-edit-modalidad.component';

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
    ModalidadComponent,
    AddEditModalidadComponent
  ],
  imports: [
    CommonModule,
    ModalidadRoutingModule,

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
export class ModalidadModule { }
