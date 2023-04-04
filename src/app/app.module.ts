import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {PanelModule} from 'primeng/panel';
import {CalendarModule} from 'primeng/calendar';
import {ToolbarModule} from 'primeng/toolbar';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {MessagesModule} from 'primeng/messages';
import {ToastModule} from 'primeng/toast';
import { SidebarModule } from "primeng/sidebar";
import {TableModule} from 'primeng/table';
import {PanelMenuModule} from 'primeng/panelmenu';
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputNumberModule} from 'primeng/inputnumber';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { authInterceptorProviders } from './service/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { NavigationComponent } from './pages/admin/navigation/navigation.component';
import { RegionalComponent } from './pages/admin/view/regional/regional.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { PaisComponent } from './pages/admin/view/pais/pais.component';
import { CiudadComponent } from './pages/admin/view/ciudad/ciudad.component';
import { ClubComponent } from './pages/admin/view/club/club.component';
import { CategoriaComponent } from './pages/admin/view/categoria/categoria.component';
import { CorredorComponent } from './pages/admin/view/corredor/corredor.component';
import { EventoComponent } from './pages/admin/view/evento/evento.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    UserDashboardComponent,
    NavigationComponent,
    RegionalComponent,
    WelcomeComponent,
    PaisComponent,
    CiudadComponent,
    ClubComponent,
    CategoriaComponent,
    CorredorComponent,
    EventoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PanelModule,
    ToolbarModule,
    CardModule,
    InputTextModule,
    MessagesModule,
    ToastModule,
    SidebarModule,
    TableModule,
    PanelMenuModule,
    DialogModule,
    ConfirmDialogModule,
    DropdownModule,
    InputSwitchModule,
    InputNumberModule,
    RadioButtonModule,
    InputTextareaModule

  ],  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
