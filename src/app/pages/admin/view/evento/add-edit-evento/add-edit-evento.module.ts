import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditEventoComponent } from './add-edit-evento.component';

import { ButtonModule } from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputNumberModule} from 'primeng/inputnumber';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [
    AddEditEventoComponent
  ],
  imports: [
    CommonModule,
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
  ],
  exports: [AddEditEventoComponent]
})
export class AddEditEventoModule { }
