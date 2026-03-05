import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemeraRoutingModule } from './remera-routing.module';
import { RemeraComponent } from './remera.component';
import { AddEditRemeraComponent } from './add-edit-remera/add-edit-remera.component';

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
    RemeraComponent,
    AddEditRemeraComponent
  ],
  imports: [
    CommonModule,
    RemeraRoutingModule,
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
export class RemeraModule { }
