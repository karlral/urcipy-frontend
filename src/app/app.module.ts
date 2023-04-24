import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import {ToolbarModule} from 'primeng/toolbar';
import {ToastModule} from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { authInterceptorProviders } from './service/auth.interceptor';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    UserDashboardComponent,

    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ToolbarModule,
    ToastModule,
    ButtonModule,
    InputTextModule
    
  ],  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
