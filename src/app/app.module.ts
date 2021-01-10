import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from "./components/home/HomeComponent";
import { NavbarComponent } from "./components/navbar/navbar.component";

import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FooterComponent } from './components/footer/footer.component';
import { PartenairesComponent } from './components/partenaires/partenaires.component';
import { UserLogoutComponent } from './shared/user/user-logout/user-logout.component';
import { MaterialModule } from './shared/material/material.module';
import { SigninComponent } from './shared/user/signin/front-singin.component';
import { FrontSingupComponent } from './shared/user/front-singup/front-singup.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './shared/user/user.service';
import { EntreprisesService } from './shared/entreprise.service';
import { JwtInterceptor } from './shared/helpers/jwt.interceptor';
import { ErrorInterceptor } from './shared/helpers/error.interceptor';
import { DevisFormComponent } from './components/devis-form/devis-form.component';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';
import { EntrepriseProfileComponent } from './components/entreprise-profile/entreprise-profile.component';
import { EntrepriseAddComponent } from './components/entreprise-add/entreprise-add.component';
import { EntrepriseUpdateComponent } from './components/entreprise-update/entreprise-update.component';
import { EspaceEntrepriseComponent } from './components/espace-entreprise/espace-entreprise.component';
import { NgxUploaderModule } from 'ngx-uploader';
import { FlipModule } from 'ngx-flip';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { CardEntrepriseComponent } from './components/espace-entreprise/card-entreprise/card-entreprise.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UploadEntrepriseLogoComponent } from './components/upload-entreprise-logo/upload-entreprise-logo.component';
import { UploadEProjectPhotoComponent } from './components/upload-e-project-photo/upload-e-project-photo.component';
//Angular Material Components

@NgModule({
  declarations: [
    SigninComponent,
    UserLogoutComponent,
    FrontSingupComponent,
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    PortfolioComponent,
    FeedbackComponent,
    FooterComponent,
    PartenairesComponent,
    NavbarComponent,
    DevisFormComponent,
    EntrepriseProfileComponent,
    EntrepriseAddComponent,
    EntrepriseUpdateComponent,
    EspaceEntrepriseComponent,
    CardEntrepriseComponent,
    UploadEntrepriseLogoComponent,
    UploadEProjectPhotoComponent

  ],
  imports: [
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FlipModule,
    NgxUploaderModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    MaterialModule,
    MatCardModule,
    FormsModule,
    
    AnimateOnScrollModule.forRoot()
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: MAT_DIALOG_DATA, useValue: 'dialogData'},
    UserService,
  EntreprisesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
