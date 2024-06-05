import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { authInterceptorProviders } from './service/auth.interceptor';




@NgModule({
  declarations: [
    AppComponent
 
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
   
    
    
  ],  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
