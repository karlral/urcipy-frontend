import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAsignaComponent } from './add-asigna.component';

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    AddAsignaComponent
  ],
  imports: [
    CommonModule,
        DialogModule,
        ButtonModule,
        ReactiveFormsModule,
        InputTextModule,
        InputNumberModule,
        CalendarModule,
        DropdownModule
      ],
      exports: [
        AddAsignaComponent
      ]
})
export class AddAsignaModule { }
