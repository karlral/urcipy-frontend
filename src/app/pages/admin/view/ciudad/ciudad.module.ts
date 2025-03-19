import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CiudadRoutingModule } from './ciudad-routing.module';
import { CiudadComponent } from './ciudad.component';

import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    CiudadComponent
  ],
  imports: [
    CommonModule,
    CiudadRoutingModule,
    FormsModule,
    InputTextModule,
    MessagesModule,
    ToastModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    DropdownModule,
    ButtonModule,
  ]
})
export class CiudadModule { }
