import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/service/admin.guard';

import { NavigationComponent } from './navigation/navigation.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [

  {
    path:'acceso',
    component:NavigationComponent, canActivate:[AdminGuard],
    children:[

      {
        path:'',
        component:WelcomeComponent
      },
      {
        path:'pais', loadChildren:()=> import('./view/pais/pais.module').then(m => m.PaisModule)
      }
      ,
      {
        path:'ciudad', loadChildren:()=> import('./view/ciudad/ciudad.module').then(m => m.CiudadModule)
      },
      {
        path:'region', loadChildren:()=> import('./view/region/region.module').then(m => m.RegionModule)
      }
      ,
      {
        path:'sistema', loadChildren:()=> import('./view/regional/regional.module').then(m => m.RegionalModule)
      }
      ,{
        path:'categoria', loadChildren:()=> import('./view/categoria/categoria.module').then(m => m.CategoriaModule)
      }
      ,
      {
        path:'club', loadChildren:()=> import('./view/club/club.module').then(m => m.ClubModule)
      },
      {
        path:'trayecto', loadChildren:()=> import('./view/trayecto/trayecto.module').then(m => m.TrayectoModule)
      },
      {
        path:'procesarcampeon', loadChildren:()=> import('./view/procesar-campeon/procesar-campeon.module').then(m => m.ProcesarCampeonModule)
      },
      {
        path:'dorsal', loadChildren:()=> import('./view/dorsal/dorsal.module').then(m => m.DorsalModule)
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
        path:'puntaje', loadChildren:()=> import('./view/puntaje/puntaje.module').then(m => m.PuntajeModule)
      },
      {
        path:'sistema', loadChildren:()=> import('../system/system.module').then(m => m.SystemModule)
      }
      ,{
        path:'concepto',loadChildren:()=> import('./view/concepto/concepto.module').then(m => m.ConceptoModule)
      },
      {
        path:'movimiento', loadChildren:()=> import('./view/movimiento/movimiento.module').then(m => m.MovimientoModule)
      },
      {
        path:'ranking', loadChildren:()=> import('./view/ranking/ranking.module').then(m => m.RankingModule)
      }

    ]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
