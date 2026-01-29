import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { CorredoruserRoutingModule } from './corredoruser-routing.module';
import { AddEditCorredoruserModule } from './add-edit-corredoruser/add-edit-corredoruser.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CorredoruserComponent } from './corredoruser.component';
import { authInterceptorProviders } from 'src/app/service/auth.interceptor';


@NgModule({
  declarations: [
    CorredoruserComponent
  ],
  imports: [
    CommonModule,
    CorredoruserRoutingModule,
    TableModule,
    InputTextModule,
    MessagesModule,
    ToastModule,
    ButtonModule,
    AddEditCorredoruserModule,
    ConfirmDialogModule,
    FormsModule,
    SharedModule
  ],  providers: [authInterceptorProviders]
  
})
export class CorredoruserModule { }
