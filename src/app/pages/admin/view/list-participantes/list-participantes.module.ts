import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListParticipantesRoutingModule } from './list-participantes-routing.module';
import { ListParticipantesComponent } from './list-participantes.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { authInterceptorProviders } from 'src/app/service/auth.interceptor';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { Toast, ToastModule } from 'primeng/toast';
import { AddEditParticiModule } from './add-edit-partici/add-edit-partici.module';


@NgModule({
  declarations: [
    
    ListParticipantesComponent
  ],
  imports: [
    CommonModule,
    ListParticipantesRoutingModule,
    FormsModule,
    InputTextModule,
    TableModule,
    ButtonModule,
    ConfirmDialogModule,
    MessagesModule,
    ToastModule,
    AddEditParticiModule

  ],providers: [authInterceptorProviders]
})
export class ListParticipantesModule { }
