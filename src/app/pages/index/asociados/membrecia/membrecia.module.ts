import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembreciaRoutingModule } from './membrecia-routing.module';
import { MembreciaComponent } from './membrecia.component';
import { CarnetComponent } from './carnet/carnet.component';

import { ToastModule } from 'primeng/toast';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MembreciaComponent,
    CarnetComponent
  ],
  imports: [
    CommonModule,
    MembreciaRoutingModule,
    ToastModule,
    SharedModule
  ]
})
export class MembreciaModule { }
