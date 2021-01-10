import { NgModule } from '@angular/core';
import { FrontSingupComponent } from './front-singup/front-singup.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { UserService } from './user.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '../helpers/jwt.interceptor';
import { ErrorInterceptor } from '../helpers/error.interceptor';




@NgModule({
  declarations: [
    FrontSingupComponent,
    FrontSingupComponent,
    UserLogoutComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MaterialModule

  ],
  exports: [
    FrontSingupComponent,
    FrontSingupComponent,
    UserLogoutComponent
  ],
  providers: [UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ]
})
export class UserModule { }
