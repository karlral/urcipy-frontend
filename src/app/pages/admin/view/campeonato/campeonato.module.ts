import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampeonatoRoutingModule } from './campeonato-routing.module';
import { CampeonatoComponent } from './campeonato.component';
import { AddEditCampeonatoComponent } from './add-edit-campeonato/add-edit-campeonato.component';

import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    CampeonatoComponent,
    AddEditCampeonatoComponent
  ],
  imports: [
    CommonModule,
    CampeonatoRoutingModule,

     TableModule,
        InputTextModule,
        MessagesModule,
        ToastModule,
        ButtonModule,
        ConfirmDialogModule,
        InputNumberModule,
        DialogModule,
        ReactiveFormsModule,
        DropdownModule
  ]
})
export class CampeonatoModule { }
