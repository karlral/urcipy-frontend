import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCampeonesRoutingModule } from './list-campeones-routing.module';
import { ListCampeonesComponent } from './list-campeones.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { AddFotoComponent } from './add-foto/add-foto.component';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import {  ConfirmDialogModule } from 'primeng/confirmdialog';


@NgModule({
  declarations: [
    ListCampeonesComponent,
    AddFotoComponent
  ],
  imports: [
    CommonModule,
    ListCampeonesRoutingModule,
    ButtonModule,
    TableModule,
    DialogModule,
    MessagesModule,
    ConfirmDialogModule
  ]
})
export class ListCampeonesModule { }
