import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventobusrunRoutingModule } from './eventobusrun-routing.module';
import { EventobusrunComponent } from './eventobusrun.component';
import { AddCorredorComponent } from './add-corredor/add-corredor.component';
import { RegistrocorredorrunComponent } from './registrocorredorrun/registrocorredorrun.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SharedModule } from 'src/app/shared/shared.module';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';

@NgModule({
  declarations: [
    EventobusrunComponent,
    AddCorredorComponent,
    RegistrocorredorrunComponent
  ],
  imports: [
    CommonModule,
    EventobusrunRoutingModule,
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
export class EventobusrunModule { }
