import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RankcorreRoutingModule } from './rankcorre-routing.module';
import { RankcorreComponent } from './rankcorre.component';

import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {MessagesModule} from 'primeng/messages';
import {ToastModule} from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { authInterceptorProviders } from 'src/app/service/auth.interceptor';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddRankingModule } from './add-ranking/add-ranking.module';



@NgModule({
  declarations: [
    RankcorreComponent
  ],
  imports: [
    CommonModule,
    RankcorreRoutingModule,
    TableModule,
        InputTextModule,
        MessagesModule,
        ToastModule,
        ButtonModule,
        ConfirmDialogModule,
        FormsModule,
        SharedModule,
        AddRankingModule
      ],  providers: [authInterceptorProviders]
})
export class RankcorreModule { }
