import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionRoutingModule } from './region-routing.module';

import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';

import { RegionComponent } from './region.component';


@NgModule({
  declarations: [
    RegionComponent
  ],
  imports: [
    CommonModule,
    RegionRoutingModule,
    FormsModule,
        InputTextModule,
        MessagesModule,
        ToastModule,
        TableModule,
        DialogModule,
        ConfirmDialogModule,
        ButtonModule,
  ]
})
export class RegionModule { }
