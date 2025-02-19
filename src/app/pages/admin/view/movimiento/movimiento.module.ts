import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {MessagesModule} from 'primeng/messages';
import {ToastModule} from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { MovimientoRoutingModule } from './movimiento-routing.module';
import { MovimientoComponent } from './movimiento.component';
import { AddEditMovimientoModule } from './add-edit-movimiento/add-edit-movimiento.module';


@NgModule({
  declarations: [
    
    MovimientoComponent
  ],
  imports: [
    CommonModule,
    MovimientoRoutingModule,
    AddEditMovimientoModule,
        TableModule,
        InputTextModule,
        MessagesModule,
        ToastModule,
        ButtonModule,
        ConfirmDialogModule,
  ]
})
export class MovimientoModule { }
