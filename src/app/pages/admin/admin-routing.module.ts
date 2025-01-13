import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/service/admin.guard';

import { NavigationComponent } from './navigation/navigation.component';
import { CategoriaComponent } from './view/categoria/categoria.component';
import { CiudadComponent } from './view/ciudad/ciudad.component';
import { ClubComponent } from './view/club/club.component';
import { PaisComponent } from './view/pais/pais.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TrayectoComponent } from './view/trayecto/trayecto.component';
import { ProcesarCampeonComponent } from './view/procesar-campeon/procesar-campeon.component';
import { RegionComponent } from './view/region/region.component';
import { RegionalComponent } from './view/regional/regional.component';


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
        path:'region',
        component:RegionComponent,
        
      },{
        path:'sistema',
        component:RegionalComponent,
        
      },{
        path:'club',
        component:ClubComponent,
        
      },{
        path:'trayecto',
        component:TrayectoComponent,
        
      },{
        path:'categoria',
        component:CategoriaComponent,
        
      },{
        path:'procesarcampeon',
        component:ProcesarCampeonComponent,
        
      }
      ,
      {
        path:'listpart', loadChildren:()=> import('./view/list-participantes/list-participantes.module').then(m => m.ListParticipantesModule)
      },
      {
        path:'listhistorial', loadChildren:()=> import('./view/list-historial/list-historial.module').then(m => m.ListHistorialModule)
      },
      {
        path:'listcihistorial', loadChildren:()=> import('./view/list-ci-historial/list-ci-historial.module').then(m => m.ListCiHistorialModule)
      },
      {
        path:'listanualhistorial', loadChildren:()=> import('./view/list-anual-historial/list-anual-historial.module').then(m => m.ListAnualHistorialModule)
      },
      {
        path:'cargahistorial', loadChildren:()=> import('./view/carga-historial/carga-historial.module').then(m => m.CargaHistorialModule)
      },
      {
        path:'listcicorredores', loadChildren:()=> import('./view/list-ci-corredor/list-ci-corredor.module').then(m => m.ListCiCorredorModule)
      },
      {
        path:'listcampeones', loadChildren:()=> import('./view/list-campeones/list-campeones.module').then(m => m.ListCampeonesModule)
      }
      ,
      {
        path:'corredor', loadChildren:()=> import('./view/corredor/corredor.module').then(m => m.CorredorModule)
      },
      {
        path:'evento', loadChildren:()=> import('./view/evento/evento.module').then(m => m.EventoModule)
      },
      {
        path:'sistema', loadChildren:()=> import('../system/system.module').then(m => m.SystemModule)
      }

    ]
    
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
