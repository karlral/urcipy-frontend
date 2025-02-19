import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConceptoRoutingModule } from './concepto-routing.module';
import { ConceptoComponent } from './concepto.component';

import {ToolbarModule} from 'primeng/toolbar';
import {InputTextModule} from 'primeng/inputtext';
import {MessagesModule} from 'primeng/messages';
import {ToastModule} from 'primeng/toast';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DropdownModule} from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ConceptoComponent
  ],
  imports: [
    CommonModule,
    ConceptoRoutingModule,
        FormsModule,
        ToolbarModule,
        InputTextModule,
        MessagesModule,
        ToastModule,
        TableModule,
        DialogModule,
        ConfirmDialogModule,
        DropdownModule,
        ButtonModule
  ]
})
export class ConceptoModule { }
