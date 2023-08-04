import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/service/admin.guard';

import { NavigationComponent } from './navigation/navigation.component';
import { CategoriaComponent } from './view/categoria/categoria.component';
import { CiudadComponent } from './view/ciudad/ciudad.component';
import { ClubComponent } from './view/club/club.component';
import { PaisComponent } from './view/pais/pais.component';
import { RegionalComponent } from './view/regional/regional.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  
  {
    path:'acceso',
    component:NavigationComponent, canActivate:[AdminGuard],
    children:[
      
      {
        path:'',
        component:WelcomeComponent
      },{
        path:'pais',
        component:PaisComponent,
        
      },{
        path:'ciudad',
        component:CiudadComponent,
        
      },{
        path:'regional',
        component:RegionalComponent,
        
      },{
        path:'club',
        component:ClubComponent,
        
      },{
        path:'categoria',
        component:CategoriaComponent,
        
      },
      {
        path:'corredor', loadChildren:()=> import('./view/corredor/corredor.module').then(m => m.CorredorModule)
      },
      {
        path:'evento', loadChildren:()=> import('./view/evento/evento.module').then(m => m.EventoModule)
      }

    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
