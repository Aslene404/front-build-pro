import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_gards/auth.guard';
import { BackDevisComponent } from './back-devis/back-devis.component';
import { BackHomeComponent } from './back-home/back-home.component';
import { BackInspireComponent } from './back-inspire/back-inspire.component';
import { BackLandpageComponent } from './back-landpage/back-landpage.component';
import { BackMessagesComponent } from './back-messages/back-messages.component';
import { BackProductComponent } from './back-product/back-product.component';
import { BackPubComponent } from './back-pub/back-pub.component';
import { BackTrendComponent } from './back-trend/back-trend.component';

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
    {
      path: 'trend',
      component: BackTrendComponent,canActivate:[AuthGuard]
    },
    {
      path: 'product',
      component: BackProductComponent,canActivate:[AuthGuard]
    },
    {
      path: 'inspire',
      component: BackInspireComponent,canActivate:[AuthGuard]
    },
    {
      path: 'pub',
      component: BackPubComponent,canActivate:[AuthGuard]
    },

    { path: '**', redirectTo: '/back/home', pathMatch: 'full' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
