import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventoTipoRoutingModule } from './evento-tipo-routing.module';
import { EventoTipoComponent } from './evento-tipo.component';
import { AddEditEventoTipoComponent } from './add-edit-evento-tipo/add-edit-evento-tipo.component';

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
    EventoTipoComponent,
    AddEditEventoTipoComponent
  ],
  imports: [
    CommonModule,
    EventoTipoRoutingModule,
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
export class EventoTipoModule { }
