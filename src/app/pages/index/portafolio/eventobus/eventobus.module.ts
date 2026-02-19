import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventobusRoutingModule } from './eventobus-routing.module';


import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ScrollPanelModule } from 'primeng/scrollpanel';

import { EventobusComponent } from './eventobus.component';
import { InscrisharedModule } from '../inscrishared/inscrishared.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DropdownModule } from 'primeng/dropdown';



@NgModule({
  declarations: [
    EventobusComponent
  ],
  imports: [
    CommonModule,
    EventobusRoutingModule,
        FormsModule,
        ToastModule,
        ButtonModule,
        InputTextModule,
        CheckboxModule,
        ScrollPanelModule,
        InscrisharedModule,
        SharedModule,
        DropdownModule
        

        
  ]
})
export class EventobusModule { }
