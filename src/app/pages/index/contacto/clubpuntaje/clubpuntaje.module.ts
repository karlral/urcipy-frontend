import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClubpuntajeRoutingModule } from './clubpuntaje-routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ClubpuntajeComponent } from './clubpuntaje.component';
import { ClubpuntajedetComponent } from './clubpuntajedet/clubpuntajedet.component';


@NgModule({
  
  declarations: [
    ClubpuntajeComponent,
        ClubpuntajedetComponent,
  ],
  imports: [
    CommonModule,
    ClubpuntajeRoutingModule,
        TableModule,
        ButtonModule
  ]
})
export class ClubpuntajeModule { }
