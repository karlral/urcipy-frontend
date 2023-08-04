import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortafolioRoutingModule } from './portafolio-routing.module';
import { PortafolioComponent } from './portafolio.component';
import { EventobusComponent } from './eventobus/eventobus.component';
import { InscripcionesComponent } from './inscripciones/inscripciones.component';
import { CategoriaComponent } from './inscripciones/categoria/categoria.component';
import { ClubComponent } from './inscripciones/club/club.component';

import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TableModule } from 'primeng/table';
import { RegistrocorredorComponent } from './eventobus/registrocorredor/registrocorredor.component';


@NgModule({
  declarations: [PortafolioComponent,
  EventobusComponent,
  RegistrocorredorComponent,
  InscripcionesComponent,
  CategoriaComponent,
  ClubComponent
],
  imports: [
    CommonModule,
    PortafolioRoutingModule,
    TableModule,
    FormsModule,
    ToastModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    ScrollPanelModule
  ]
})
export class PortafolioModule { }
