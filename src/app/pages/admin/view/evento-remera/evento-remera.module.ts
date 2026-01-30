import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventoRemeraRoutingModule } from './evento-remera-routing.module';
import { EventoRemeraComponent } from './evento-remera.component';
import { AddEditEventoRemeraComponent } from './add-edit-evento-remera/add-edit-evento-remera.component';

import { InputTextModule } from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {MessagesModule} from 'primeng/messages';
import {ToastModule} from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [
    EventoRemeraComponent,
    AddEditEventoRemeraComponent
  ],
  imports: [
    CommonModule,
    EventoRemeraRoutingModule,

    InputTextModule,
    TableModule,
    MessagesModule,
    ToastModule,
    ButtonModule,
    ConfirmDialogModule,
    DialogModule,
    ReactiveFormsModule,
    DropdownModule,
            
            
            

  ]
})
export class EventoRemeraModule { }
