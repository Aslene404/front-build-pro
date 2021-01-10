import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './shared/user/signin/front-singin.component';
import { HomeComponent } from './components/home/HomeComponent';
import { FrontSingupComponent } from './shared/user/front-singup/front-singup.component';
import { DevisFormComponent } from './components/devis-form/devis-form.component';
import { EntrepriseProfileComponent } from './components/entreprise-profile/entreprise-profile.component';
import { EntrepriseAddComponent } from './components/entreprise-add/entreprise-add.component';
import {EntrepriseResolver} from './shared/entreprise-resolver.service';
import { AuthGuard } from './_gards/auth.guard';

import {EntrepriseUpdateComponent} from './components/entreprise-update/entreprise-update.component'
import { EspaceEntrepriseComponent } from './components/espace-entreprise/espace-entreprise.component';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:FrontSingupComponent},
  {path:'devis',component:DevisFormComponent,canActivate:[AuthGuard]},
  {path:'entreprise/profile',component:EntrepriseProfileComponent,canActivate:[AuthGuard]},
  {path:'entreprise/add',component:EntrepriseAddComponent,canActivate:[AuthGuard]},
  {path:'entreprise',component:EspaceEntrepriseComponent},
  {path:'entreprise/update/:id',component:EntrepriseUpdateComponent , resolve:{entreprise:EntrepriseResolver}},
  {path:'entreprise/profile/:id',component:EntrepriseProfileComponent,canActivate:[AuthGuard]},
  {
    path: 'back',
    loadChildren: () => import('./back-office/back-office.module').then(m => m.BackOfficeModule),
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
