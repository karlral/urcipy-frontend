import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscorredorComponent } from './components/buscorredor/buscorredor.component';
import { CatCorredorComponent } from './components/cat-corredor/cat-corredor.component';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  declarations: [
    BuscorredorComponent,
    CatCorredorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    ButtonModule,
    InputTextModule
  ],exports:[
    BuscorredorComponent,
    CatCorredorComponent
  ]
})
export class SharedModule { }
