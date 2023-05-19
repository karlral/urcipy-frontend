import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoComponent } from './evento.component';
import { EventoRoutingModule } from './evento-routing.module';
import { AddEditEventoModule } from './add-edit-evento/add-edit-evento.module';

import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {MessagesModule} from 'primeng/messages';
import {ToastModule} from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { authInterceptorProviders } from 'src/app/service/auth.interceptor';


@NgModule({
  declarations: [
    EventoComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    MessagesModule,
    ToastModule,
    ButtonModule,
    ConfirmDialogModule,
    AddEditEventoModule,
    EventoRoutingModule
  ],  providers: [authInterceptorProviders]
})
export class EventoModule { }
