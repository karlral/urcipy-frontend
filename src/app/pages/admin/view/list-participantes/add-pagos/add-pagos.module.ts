import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPagosComponent } from './add-pagos.component';

import { ButtonModule } from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InputNumberModule} from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    AddPagosComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
        ButtonModule,
        ReactiveFormsModule,
        InputNumberModule,
        FormsModule,
        InputTextModule,
        DropdownModule,
        
  ],
  exports: [
    AddPagosComponent
  ]
})
export class AddPagosModule { }
