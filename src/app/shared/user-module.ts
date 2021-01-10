import { NgModule } from '@angular/core';
import { UserLogoutComponent } from './user-logout/user-logout.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';
import { UpdateRoleComponent } from './update-role/update-role.component';
import { CustomerBadgeComponent } from './customer-badge/customer-badge.component';
import { NgxUploaderModule } from 'ngx-uploader';
import { UpdateUserSettingsComponent } from './update-user-settings/update-user-settings.component';
import { UserAvatarUploaderComponent } from './user-avatar-uploader/user-avatar-uploader.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';




@NgModule({
    declarations:[
        UserLogoutComponent,
        UserLoginComponent,
        UserListComponent,
        UserSignupComponent,
        UpdateRoleComponent,
        CustomerBadgeComponent,
        UpdateUserSettingsComponent,
        UserAvatarUploaderComponent,
        AdminProfileComponent,
        CustomerInfoComponent
    ],
    imports:[
        MaterialModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        CommonModule,
        NgxUploaderModule
    ],
    exports:[
        UserLogoutComponent,
        UserLoginComponent,
        UserListComponent,
        UserSignupComponent,
        CustomerBadgeComponent,
        UpdateUserSettingsComponent,
        UserAvatarUploaderComponent,
        AdminProfileComponent,
        CustomerInfoComponent
    ],
    providers:[AuthenticationService,UserModule]
})
export class UserModule{

}