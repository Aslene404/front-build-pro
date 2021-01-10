import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/user/user.model';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from 'src/app/shared/contact.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IApiResponse } from 'src/app/shared/models/api-response.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contactForm: FormGroup;
  currentUser: IUser;
  existUser: IUser;
  constructor(private router:Router,private authenticationService:AuthenticationService,private fb: FormBuilder,
    private contactsService: ContactsService,
    private snackBar: MatSnackBar) { 
    this.authenticationService.currentUser.subscribe(tmpUser=>this.currentUser=tmpUser);
  }

  ngOnInit(): void {
    this.currentUser= JSON.parse(localStorage.getItem('currentUser'));
    this.existUser = getcurrentUser();
    if (!this.existUser) {

      this.contactForm = this.fb.group(
        {
          fullname: ['', Validators.required],
          email: ['', Validators.compose([
            Validators.required,
            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
          ])],
          phone: ['', Validators.compose([
            Validators.required,
            Validators.pattern('[0-9]+|0-9]+[0-9]+[0-9]+[0-9]')
          ])],
          city: ['', Validators.required],
          opinion: ['', Validators.required]

        });
    } else {
      this.contactForm = this.fb.group(
        {
          fullname: [this.existUser.fullusername, Validators.required],
          email: [this.existUser.email, Validators.compose([
            Validators.required,
            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
          ])],
          phone: [this.existUser.phone, Validators.compose([
            Validators.required,
            Validators.pattern('[0-9]+|0-9]+[0-9]+[0-9]+[0-9]')
          ])],

          /*
          phone: ['', Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]+|0-9]+[0-9]+[0-9]+[0-9]')
        ])],
          
          */
          city: [this.existUser.city, Validators.required],
          opinion: ['', Validators.required]

        });
    }
  }
  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/front/login']);
  }
  send() {

    this.contactsService.addContact(this.contactForm.value).subscribe({
      next: (response: IApiResponse) => {
        this.snackBar.open(response.message, 'Close');
      },
      error: (error) => this.snackBar.open(error.message, 'Close'),
      complete: () =>  this.contactForm.reset()
    });



  }


}
function getcurrentUser(): IUser {
  return JSON.parse(localStorage.getItem('currentUser'));
}
