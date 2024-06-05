import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserNavigationComponent } from './user-navigation/user-navigation.component';
import { UserWelcomeComponent } from './user-welcome/user-welcome.component';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ButtonModule } from 'primeng/button';
import { authInterceptorProviders } from 'src/app/service/auth.interceptor';


@NgModule({
  declarations: [
    UserDashboardComponent,
    UserNavigationComponent,
    UserWelcomeComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    PanelModule,
    InputTextModule,
    SidebarModule,
    PanelMenuModule,
    ButtonModule
  ],  providers: [authInterceptorProviders]
})
export class UserModule { }
