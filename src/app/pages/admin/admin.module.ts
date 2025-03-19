import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { SidebarModule } from "primeng/sidebar";
import {PanelMenuModule} from 'primeng/panelmenu';
import { ButtonModule } from 'primeng/button';


import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { authInterceptorProviders } from 'src/app/service/auth.interceptor';
import { PanelModule } from 'primeng/panel';





@NgModule({
  declarations: [
    DashboardComponent,
    NavigationComponent,
    WelcomeComponent,
    
    ],
  imports: [   
    CommonModule,
    AdminRoutingModule,
    PanelModule,
    PanelMenuModule,
    ButtonModule,
    SidebarModule,
    
  ],  providers: [authInterceptorProviders]
})
export class AdminModule { }
