import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventobusninoRoutingModule } from './eventobusnino-routing.module';
import { EventobusninoComponent } from './eventobusnino.component';

import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { InscrisharedModule } from '../inscrishared/inscrishared.module';


@NgModule({
  declarations: [
    EventobusninoComponent
    ],
  imports: [
    CommonModule,
    EventobusninoRoutingModule,
            FormsModule,
            ToastModule,
            ButtonModule,
            InputTextModule,
            CheckboxModule,
            ScrollPanelModule,
            InscrisharedModule
  ]
})
export class EventobusninoModule { }
