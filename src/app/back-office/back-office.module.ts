import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackOfficeRoutingModule } from './back-office-routing.module';
import { BackLandpageComponent } from './back-landpage/back-landpage.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { BackMessagesComponent } from './back-messages/back-messages.component';
import { BackDevisComponent } from './back-devis/back-devis.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';
import { BackHomeComponent } from './back-home/back-home.component';



@NgModule({
  declarations: [BackLandpageComponent, AdminNavbarComponent, BackMessagesComponent, BackDevisComponent, BackHomeComponent],
  imports: [
    CommonModule,
    BackOfficeRoutingModule,
    MaterialModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BackOfficeModule { }
