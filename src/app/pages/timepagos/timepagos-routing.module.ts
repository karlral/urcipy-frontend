import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimepagosNavigationComponent } from './timepagos-navigation/timepagos-navigation.component';
import { TimepagosWelcomeComponent } from './timepagos-welcome/timepagos-welcome.component';
import { TimepagosGuard } from 'src/app/service/timepagos.guard';

const routes: Routes = [
  {
      path:'access',
      component:TimepagosNavigationComponent, canActivate:[TimepagosGuard],
      children:[
        
        {
          path:'',
          component:TimepagosWelcomeComponent
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
export class TimepagosRoutingModule { }
