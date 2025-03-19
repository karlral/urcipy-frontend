import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditParticiComponent } from './add-edit-partici.component';

import { ButtonModule } from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InputNumberModule} from 'primeng/inputnumber';

@NgModule({
  declarations: [
    AddEditParticiComponent
  ],
  imports: [
    CommonModule,DialogModule,
    ButtonModule,
    ReactiveFormsModule,
    InputNumberModule,
    FormsModule,
    
  ],
    exports: [
      AddEditParticiComponent
    ]
})
export class AddEditParticiModule { }
