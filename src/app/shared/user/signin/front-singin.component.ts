import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-front-singin',
  templateUrl: './front-singin.component.html',
  styleUrls: ['./front-singin.component.scss']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;
  hide:boolean;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar:MatSnackBar,
    private authenticationService: AuthenticationService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/home']);
   } }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['',Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }
  onSubmit() {
    this.authenticationService.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
          this.snackBar.open("Logged in Successufully",'Close')
        },
        error => {
          this.snackBar.open("Failed to login",'Close')
        });
  }

  getErrorMessage(){
    return 'invalid email, try again'
  }
}

