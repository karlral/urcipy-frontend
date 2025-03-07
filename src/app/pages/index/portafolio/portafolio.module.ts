import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortafolioRoutingModule } from './portafolio-routing.module';
import { PortafolioComponent } from './portafolio.component';
import { EventobusComponent } from './eventobus/eventobus.component';
import { InscripcionesComponent } from './inscripciones/inscripciones.component';
import { CategoriaComponent } from './inscripciones/categoria/categoria.component';
import { ClubComponent } from './inscripciones/club/club.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TableModule } from 'primeng/table';
import { TreeTableModule } from 'primeng/treetable';

import { RegistrocorredorComponent } from './eventobus/registrocorredor/registrocorredor.component';
import { MembreciaComponent } from './membrecia/membrecia.component';
import { CarnetComponent } from './membrecia/carnet/carnet.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TandasComponent } from './inscripciones/tandas/tandas.component';
import { EventobusrunComponent } from './eventobusrun/eventobusrun.component';
import { AddCorredorComponent } from './eventobusrun/add-corredor/add-corredor.component';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RegistrocorredorrunComponent } from './eventobusrun/registrocorredorrun/registrocorredorrun.component';



@NgModule({
  declarations: [PortafolioComponent,
  EventobusComponent,
  RegistrocorredorComponent,
  InscripcionesComponent,
  CategoriaComponent,
  ClubComponent,
  MembreciaComponent,
  CarnetComponent,
  TandasComponent,
  EventobusrunComponent,
  AddCorredorComponent,
  RegistrocorredorrunComponent
],
  imports: [
    CommonModule,
    PortafolioRoutingModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    ScrollPanelModule,
    SharedModule,
    TreeTableModule,
    PanelModule,
    DropdownModule,
    CalendarModule,
    RadioButtonModule,
  ]
})
export class PortafolioModule { }
