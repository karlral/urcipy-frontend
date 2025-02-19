import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRankingComponent } from './add-ranking.component';

import { ButtonModule } from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {  ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [
    AddRankingComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    CalendarModule
  ],
  exports: [
    AddRankingComponent
  ]
})
export class AddRankingModule { }
