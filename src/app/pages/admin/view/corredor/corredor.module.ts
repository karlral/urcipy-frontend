import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CorredorComponent } from './corredor.component';

import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {MessagesModule} from 'primeng/messages';
import {ToastModule} from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { authInterceptorProviders } from 'src/app/service/auth.interceptor';
import { CorredorRoutingModule } from './corredor-routing.module';
import { AddEditCorredorModule } from './add-edit-corredor/add-edit-corredor.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CorredorComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    MessagesModule,
    ToastModule,
    ButtonModule,
    CorredorRoutingModule,
    AddEditCorredorModule,
    ConfirmDialogModule,
    FormsModule,
    SharedModule
  ],  providers: [authInterceptorProviders]
})
export class CorredorModule { }
