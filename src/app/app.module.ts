import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import {ToolbarModule} from 'primeng/toolbar';
import {ToastModule} from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { authInterceptorProviders } from './service/auth.interceptor';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ResumenComponent } from './pages/index/resumen/resumen.component';
import { PortafolioComponent } from './pages/index/portafolio/portafolio.component';
import { BlogComponent } from './pages/index/blog/blog.component';
import { ContactoComponent } from './pages/index/contacto/contacto.component';
import { RegistrocorredorComponent } from './pages/index/registrocorredor/registrocorredor.component';
import { EventobusComponent } from './pages/index/eventobus/eventobus.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    UserDashboardComponent,
    ResumenComponent,
    PortafolioComponent,
    BlogComponent,
    ContactoComponent,
    RegistrocorredorComponent,
    EventobusComponent

    
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
    InputTextModule,
    CheckboxModule
    
  ],  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
