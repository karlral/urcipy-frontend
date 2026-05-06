import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipopuntosRoutingModule } from './tipopuntos-routing.module';
import { TipopuntosComponent } from './tipopuntos.component';
import { AddEditTipopuntosComponent } from './add-edit-tipopuntos/add-edit-tipopuntos.component';

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
    TipopuntosComponent,
    AddEditTipopuntosComponent
  ],
  imports: [
    CommonModule,
    TipopuntosRoutingModule,

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
export class TipopuntosModule { }
