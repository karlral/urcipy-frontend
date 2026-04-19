import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditParticipanteComponent } from './add-edit-participante.component';

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { SharedModule } from 'src/app/shared/shared.module';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [
    AddEditParticipanteComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    InputNumberModule,
    InputTextModule,
    SharedModule,
    DropdownModule,
    RadioButtonModule,
    CalendarModule
  ], exports: [
    AddEditParticipanteComponent
  ]
})
export class AddEditParticipanteModule { }
