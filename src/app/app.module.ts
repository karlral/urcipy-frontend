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
import { OrderListModule } from 'primeng/orderlist';
import { TableModule } from 'primeng/table';
import { ScrollPanelModule } from 'primeng/scrollpanel';

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
import { RegistrocorredorComponent } from './pages/index/portafolio/eventobus/registrocorredor/registrocorredor.component';

import { CategoriasComponent } from './pages/index/contacto/categorias/categorias.component';
import { PuntajecorredorComponent } from './pages/index/contacto/categorias/puntajecorredor/puntajecorredor.component';
import { EventosComponent } from './pages/index/contacto/eventos/eventos.component';
import { InscripcionesComponent } from './pages/index/portafolio/inscripciones/inscripciones.component';
import { EventobusComponent } from './pages/index/portafolio/eventobus/eventobus.component';
import { CategoriaComponent } from './pages/index/portafolio/inscripciones/categoria/categoria.component';
import { ClubComponent } from './pages/index/portafolio/inscripciones/club/club.component';
import { ResultadosComponent } from './pages/index/contacto/eventos/resultados/resultados.component';
import { ClubpuntajeComponent } from './pages/index/contacto/clubpuntaje/clubpuntaje.component';
import { ClubpuntajedetComponent } from './pages/index/contacto/clubpuntaje/clubpuntajedet/clubpuntajedet.component';
import { CampeonesComponent } from './pages/index/blog/campeones/campeones.component';




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
    EventobusComponent,
    InscripcionesComponent,
    ClubComponent,
    CategoriaComponent,
    CategoriasComponent,
    PuntajecorredorComponent,
    EventosComponent,
    ResultadosComponent,
    ClubpuntajeComponent,
    ClubpuntajedetComponent,
    CampeonesComponent

    
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
    CheckboxModule,
    OrderListModule,
    TableModule,
    ScrollPanelModule

    
  ],  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
