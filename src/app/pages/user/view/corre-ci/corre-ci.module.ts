import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CorreCiRoutingModule } from './corre-ci-routing.module';
import { authInterceptorProviders } from 'src/app/service/auth.interceptor';
import { CorreCiComponent } from './corre-ci.component';
import { AddEditCorreCiComponent } from './add-edit-corre-ci/add-edit-corre-ci.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { PanelModule } from 'primeng/panel';



@NgModule({
  declarations: [
    AddEditCorreCiComponent,
    CorreCiComponent
  ],
  imports: [
    CommonModule,
    CorreCiRoutingModule,
    TableModule,
    MessagesModule,
    ToastModule,
    ConfirmDialogModule,
    DialogModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule,
    InputSwitchModule,
    InputNumberModule,
    RadioButtonModule,
    InputTextareaModule,
    CalendarModule,
    SharedModule,
    PanelModule
  ],  providers: [authInterceptorProviders]
  
})
export class CorreCiModule { }
