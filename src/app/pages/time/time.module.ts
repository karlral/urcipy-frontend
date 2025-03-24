import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeRoutingModule } from './time-routing.module';
import { TimeDashboardComponent } from './time-dashboard/time-dashboard.component';
import { TimeNavigationComponent } from './time-navigation/time-navigation.component';
import { TimeWelcomeComponent } from './time-welcome/time-welcome.component';

import { PanelModule } from 'primeng/panel';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    TimeDashboardComponent,
    TimeNavigationComponent,
    TimeWelcomeComponent
  ],
  imports: [
    CommonModule,
    TimeRoutingModule,
    PanelModule,
        SidebarModule,
        PanelMenuModule,
        ButtonModule
  ]
})
export class TimeModule { }
