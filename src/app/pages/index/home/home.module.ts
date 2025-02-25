import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { ReasonComponent } from './reason/reason.component';
import { ProgramsComponent } from './programs/programs.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ReasonComponent,
    ProgramsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
