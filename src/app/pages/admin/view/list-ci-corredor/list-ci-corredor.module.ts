import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCiCorredorRoutingModule } from './list-ci-corredor-routing.module';
import { ListCiCorredorComponent } from './list-ci-corredor.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormsModule } from '@angular/forms';

import { authInterceptorProviders } from 'src/app/service/auth.interceptor';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListCiCorredorComponent
  ],
  imports: [
    CommonModule,
    ListCiCorredorRoutingModule,
    TableModule,
    InputTextModule,
    MessagesModule,
    ToastModule,
    ButtonModule,
    ConfirmDialogModule,
    FormsModule,
    SharedModule
  ],  providers: [authInterceptorProviders]
  
})
export class ListCiCorredorModule { }
