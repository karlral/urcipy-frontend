import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventoAsignacionRoutingModule } from './evento-asignacion-routing.module';
import { EventoAsignacionComponent } from './evento-asignacion.component';
import { AddEditEventoAsignacionComponent } from './add-edit-evento-asignacion/add-edit-evento-asignacion.component';

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
    EventoAsignacionComponent,
    AddEditEventoAsignacionComponent
  ],
  imports: [
    CommonModule,
    EventoAsignacionRoutingModule,
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
export class EventoAsignacionModule { }
