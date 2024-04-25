import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';

import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {ToolbarModule} from 'primeng/toolbar';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {MessagesModule} from 'primeng/messages';
import {ToastModule} from 'primeng/toast';
import { SidebarModule } from "primeng/sidebar";
import {TableModule} from 'primeng/table';
import {PanelMenuModule} from 'primeng/panelmenu';
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputNumberModule} from 'primeng/inputnumber';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';


import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RegionalComponent } from './view/regional/regional.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PaisComponent } from './view/pais/pais.component';
import { CiudadComponent } from './view/ciudad/ciudad.component';
import { ClubComponent } from './view/club/club.component';
import { CategoriaComponent } from './view/categoria/categoria.component';

import { authInterceptorProviders } from 'src/app/service/auth.interceptor';
import { BuscorredorComponent } from './view/buscorredor/buscorredor.component';





@NgModule({
  declarations: [
    DashboardComponent,
    NavigationComponent,
    RegionalComponent,
    WelcomeComponent,
    PaisComponent,
    CiudadComponent,
    ClubComponent,
    CategoriaComponent,
    BuscorredorComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CalendarModule,
    FormsModule,
    PanelModule,
    ToolbarModule,
    CardModule,
    InputTextModule,
    MessagesModule,
    ToastModule,
    SidebarModule,
    TableModule,
    PanelMenuModule,
    DialogModule,
    ConfirmDialogModule,
    DropdownModule,
    InputSwitchModule,
    InputNumberModule,
    RadioButtonModule,
    InputTextareaModule,
    ButtonModule
  ],  providers: [authInterceptorProviders]
})
export class AdminModule { }
