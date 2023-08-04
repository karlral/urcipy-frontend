import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { CampeonesComponent } from './campeones/campeones.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    
    BlogComponent,
    CampeonesComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,

    ButtonModule,
    TableModule,
  ]
})
export class BlogModule { }
