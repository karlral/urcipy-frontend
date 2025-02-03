import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PuntajeRoutingModule } from './puntaje-routing.module';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PuntajeComponent } from './puntaje.component';
import { AddEditPuntajeComponent } from './add-edit-puntaje/add-edit-puntaje.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PuntajeComponent,
    AddEditPuntajeComponent
  ],
  imports: [
    CommonModule,
    PuntajeRoutingModule,
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
export class PuntajeModule { }
