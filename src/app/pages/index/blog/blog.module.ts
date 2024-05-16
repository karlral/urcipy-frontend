import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { CampeonesComponent } from './campeon/campeones/campeones.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CampeonComponent } from './campeon/campeon.component';
import { HistorialComponent } from './historial/historial.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';


@NgModule({
  declarations: [
    
    BlogComponent,
    CampeonesComponent,
    CampeonComponent,
    HistorialComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MessagesModule,
    ButtonModule,
    TableModule,
    SharedModule,
    ToastModule
  ]
})
export class BlogModule { }
