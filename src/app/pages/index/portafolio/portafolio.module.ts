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
import { TreeTableModule } from 'primeng/treetable';

import { RegistrocorredorComponent } from './eventobus/registrocorredor/registrocorredor.component';
import { MembreciaComponent } from './membrecia/membrecia.component';
import { CarnetComponent } from './membrecia/carnet/carnet.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TandasComponent } from './inscripciones/tandas/tandas.component';
import { EventobusninoComponent } from './eventobusnino/eventobusnino.component';
import { InscripcionesninoComponent } from './inscripcionesnino/inscripcionesnino.component';



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
  EventobusninoComponent,
  InscripcionesninoComponent
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
    ScrollPanelModule,
    SharedModule,
    TreeTableModule
  ]
})
export class PortafolioModule { }
