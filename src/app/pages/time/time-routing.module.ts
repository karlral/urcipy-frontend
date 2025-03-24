import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeNavigationComponent } from './time-navigation/time-navigation.component';
import { TimeGuard } from 'src/app/service/time.guard';
import { TimeWelcomeComponent } from './time-welcome/time-welcome.component';

const routes: Routes = [
  {
      path:'access',
      component:TimeNavigationComponent, canActivate:[TimeGuard],
      children:[
        
        {
          path:'',
          component:TimeWelcomeComponent
        },
        {
          path:'evento', loadChildren:()=> import('../admin/view/evento/evento.module').then(m => m.EventoModule)
        },      
        {
          path:'club', loadChildren:()=> import('../admin/view/club/club.module').then(m => m.ClubModule)
        },
        {
          path:'correci', loadChildren:()=> import('../user/view/corre-ci/corre-ci.module').then(m => m.CorreCiModule)
        },
             
      {
        path:'dorsal', loadChildren:()=> import('../admin/view/dorsal/dorsal.module').then(m => m.DorsalModule)
      },
      {
        path:'listpart', loadChildren:()=> import('../admin/view/list-participantes/list-participantes.module').then(m => m.ListParticipantesModule)
      },

        
  
      ]
      
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeRoutingModule { }
