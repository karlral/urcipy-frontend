import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AsignacorreRoutingModule } from './asignacorre-routing.module';
import { AsignacorreComponent } from './asignacorre.component';

import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {MessagesModule} from 'primeng/messages';
import {ToastModule} from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { authInterceptorProviders } from 'src/app/service/auth.interceptor';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddAsignaModule } from './add-asigna/add-asigna.module';

@NgModule({
  declarations: [
    AsignacorreComponent
  ],
  imports: [
    CommonModule,
    AsignacorreRoutingModule,
        TableModule,
            InputTextModule,
            MessagesModule,
            ToastModule,
            ButtonModule,
            ConfirmDialogModule,
            FormsModule,
            SharedModule,
            AddAsignaModule
          ],  providers: [authInterceptorProviders]
  
})
export class AsignacorreModule { }
