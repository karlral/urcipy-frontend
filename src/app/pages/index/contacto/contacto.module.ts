import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ContactoComponent } from './contacto.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { PuntajecorredorComponent } from './categorias/puntajecorredor/puntajecorredor.component';
import { ClubpuntajeComponent } from './clubpuntaje/clubpuntaje.component';
import { ClubpuntajedetComponent } from './clubpuntaje/clubpuntajedet/clubpuntajedet.component';
import { EventosComponent } from './eventos/eventos.component';
import { ResultadosComponent } from './eventos/resultados/resultados.component';


@NgModule({
  declarations: [
    ContactoComponent,
    CategoriasComponent,
    PuntajecorredorComponent,
    ClubpuntajeComponent,
    ClubpuntajedetComponent,
    EventosComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    TableModule,
    ButtonModule
  ]
})
export class ContactoModule { }
