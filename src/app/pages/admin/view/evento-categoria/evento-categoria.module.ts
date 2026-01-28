import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventoCategoriaRoutingModule } from './evento-categoria-routing.module';
import { EventoCategoriaComponent } from './evento-categoria.component';
import { AddEditEventoCategoriaComponent } from './add-edit-evento-categoria/add-edit-evento-categoria.component';

import { InputTextModule } from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {MessagesModule} from 'primeng/messages';
import {ToastModule} from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [
    EventoCategoriaComponent,
    AddEditEventoCategoriaComponent
  ],
  imports: [
    CommonModule,
    EventoCategoriaRoutingModule,

    InputTextModule,
    TableModule,
    MessagesModule,
    ToastModule,
    ButtonModule,
    ConfirmDialogModule,
    DialogModule,
    ReactiveFormsModule,
    DropdownModule,
  ]
})
export class EventoCategoriaModule { }
