import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DorsalRoutingModule } from './dorsal-routing.module';
import { DorsalComponent } from './dorsal.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [DorsalComponent],
  imports: [
    CommonModule,
    DorsalRoutingModule,
    FormsModule,
    InputTextModule,
    MessagesModule,
    ToastModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    DropdownModule,
    InputSwitchModule,
    InputNumberModule,
    ButtonModule,
  ],
})
export class DorsalModule {}
