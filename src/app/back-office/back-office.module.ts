import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackOfficeRoutingModule } from './back-office-routing.module';
import { BackLandpageComponent } from './back-landpage/back-landpage.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { BackMessagesComponent } from './back-messages/back-messages.component';
import { BackDevisComponent } from './back-devis/back-devis.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';
import { BackHomeComponent } from './back-home/back-home.component';
import { BackTrendComponent } from './back-trend/back-trend.component';
import { BackProductComponent } from './back-product/back-product.component';
import { BackInspireComponent } from './back-inspire/back-inspire.component';
import { BackPubComponent } from './back-pub/back-pub.component';
import { UploadProductImageComponent } from './upload-product-image/upload-product-image.component';
import { UploadTrendImageComponent } from './upload-trend-image/upload-trend-image.component';
import { UploadPubImageComponent } from './upload-pub-image/upload-pub-image.component';
import { UploadInspireImageComponent } from './upload-inspire-image/upload-inspire-image.component';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlipModule } from 'ngx-flip';
import { NgxUploaderModule } from 'ngx-uploader';
import { AppRoutingModule } from '../app-routing.module';
import { ProductsService } from '../shared/product.service';
import { TrendsService } from '../shared/trend.service';
import { PubsService } from '../shared/pub.service';
import { InspiresService } from '../shared/inspire.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppComponent } from '../app.component';
import { ErrorInterceptor } from '../shared/helpers/error.interceptor';
import { JwtInterceptor } from '../shared/helpers/jwt.interceptor';
import { UserService } from '../shared/user/user.service';
import { BackEntrepriseComponent } from './back-entreprise/back-entreprise.component';



@NgModule({
  declarations: [BackLandpageComponent, AdminNavbarComponent, BackMessagesComponent, BackDevisComponent, BackHomeComponent, BackTrendComponent, BackProductComponent, BackInspireComponent, BackPubComponent, UploadProductImageComponent, UploadTrendImageComponent, UploadPubImageComponent, UploadInspireImageComponent, BackEntrepriseComponent],
  imports: [
    CommonModule,
    BackOfficeRoutingModule,
    MaterialModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    
    
    
    
    FontAwesomeModule,
    FlipModule,
    NgxUploaderModule,
    
    HttpClientModule,
    NgbModule,
    MaterialModule,
    MatCardModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: MAT_DIALOG_DATA, useValue: 'dialogData'},
    UserService,
  ProductsService,TrendsService,PubsService,InspiresService]
})
export class BackOfficeModule { }
