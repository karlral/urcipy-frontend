import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CargaHistorialRoutingModule } from './carga-historial-routing.module';
import { CargaHistorialComponent } from './carga-historial.component';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { authInterceptorProviders } from 'src/app/service/auth.interceptor';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    CargaHistorialComponent
  ],
  imports: [
    CommonModule,
    CargaHistorialRoutingModule,
    FormsModule,
    DialogModule,
    ConfirmDialogModule,
    DropdownModule,
    ButtonModule,
    ToastModule
  ],  providers: [authInterceptorProviders]
})
export class CargaHistorialModule { }
