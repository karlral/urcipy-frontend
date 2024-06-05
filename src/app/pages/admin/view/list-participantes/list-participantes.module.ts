import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListParticipantesRoutingModule } from './list-participantes-routing.module';
import { ListParticipantesComponent } from './list-participantes.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { authInterceptorProviders } from 'src/app/service/auth.interceptor';


@NgModule({
  declarations: [
    
    ListParticipantesComponent
  ],
  imports: [
    CommonModule,
    ListParticipantesRoutingModule,
    FormsModule,
    InputTextModule,
    TableModule,
    ButtonModule

  ],providers: [authInterceptorProviders]
})
export class ListParticipantesModule { }
