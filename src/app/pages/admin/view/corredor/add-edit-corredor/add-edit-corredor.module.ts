import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditCorredorComponent } from './add-edit-corredor.component';

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
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AddEditCorredorComponent
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
    SharedModule


  ],
  exports: [AddEditCorredorComponent]
})
export class AddEditCorredorModule { }
