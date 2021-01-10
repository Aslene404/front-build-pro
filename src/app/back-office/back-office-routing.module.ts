import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_gards/auth.guard';
import { BackDevisComponent } from './back-devis/back-devis.component';
import { BackHomeComponent } from './back-home/back-home.component';
import { BackLandpageComponent } from './back-landpage/back-landpage.component';
import { BackMessagesComponent } from './back-messages/back-messages.component';

const routes: Routes = [{
    
  path: '', component: BackLandpageComponent,
  children: [
    {
      path: 'home',
      component: BackHomeComponent,canActivate:[AuthGuard]
    },


    {
      path: 'messages',
      component: BackMessagesComponent,canActivate:[AuthGuard]
    },
    {
      path: 'devis',
      component: BackDevisComponent,canActivate:[AuthGuard]
    },

    { path: '**', redirectTo: '/back/home', pathMatch: 'full' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
