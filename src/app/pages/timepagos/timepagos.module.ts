import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimepagosRoutingModule } from './timepagos-routing.module';
import { TimepagosDashboardComponent } from './timepagos-dashboard/timepagos-dashboard.component';
import { TimepagosNavigationComponent } from './timepagos-navigation/timepagos-navigation.component';
import { TimepagosWelcomeComponent } from './timepagos-welcome/timepagos-welcome.component';

import { PanelModule } from 'primeng/panel';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    TimepagosDashboardComponent,
    TimepagosNavigationComponent,
    TimepagosWelcomeComponent
  ],
  imports: [
    CommonModule,
    TimepagosRoutingModule,
    PanelModule,
            SidebarModule,
            PanelMenuModule,
            ButtonModule
  ]
})
export class TimepagosModule { }
