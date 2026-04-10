import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventobusRoutingModule } from './eventobus-routing.module';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ScrollPanelModule } from 'primeng/scrollpanel';

import { EventobusComponent } from './eventobus.component';
import { InscrisharedModule } from '../inscrishared/inscrishared.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { ModCorredorComponent } from './mod-corredor/mod-corredor.component';


@NgModule({
  declarations: [
    EventobusComponent,
    ModCorredorComponent
  ],
  imports: [
    CommonModule,
    EventobusRoutingModule,
    InscrisharedModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    ScrollPanelModule,
    SharedModule,
    DropdownModule,
    PanelModule,
        

        
  ]
})
export class EventobusModule { }
