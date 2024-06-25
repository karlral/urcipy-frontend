import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserWelcomeComponent } from './user-welcome/user-welcome.component';
import { UserNavigationComponent } from './user-navigation/user-navigation.component';
import { NormalGuard } from 'src/app/service/normal.guard';

const routes: Routes = [
  {
    path:'access',
    component:UserNavigationComponent, canActivate:[NormalGuard],
    children:[
      
      {
        path:'',
        component:UserWelcomeComponent
      },
      {
        path:'listpart', loadChildren:()=> import('../admin/view/list-participantes/list-participantes.module').then(m => m.ListParticipantesModule)
      },
      {
        path:'correci', loadChildren:()=> import('./view/corre-ci/corre-ci.module').then(m => m.CorreCiModule)
      }

    ]
    
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
