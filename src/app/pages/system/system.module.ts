import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UsuarioRolComponent } from './usuario-rol/usuario-rol.component';
import { AddEditUsuarioRolComponent } from './usuario-rol/add-edit-usuario-rol/add-edit-usuario-rol.component';

import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { RolComponent } from './rol/rol.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    UsuarioRolComponent,
    AddEditUsuarioRolComponent,
    RolComponent,
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,

    FormsModule,
    InputTextModule,
    TableModule,
    MessagesModule,
    ToastModule,
    ButtonModule,
    ConfirmDialogModule,
    DialogModule,
    ReactiveFormsModule,
    DropdownModule,
  ]
})
export class SystemModule { }
