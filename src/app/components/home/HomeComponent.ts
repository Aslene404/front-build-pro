import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/user/user.model';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from 'src/app/shared/contact.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IApiResponse } from 'src/app/shared/models/api-response.model';
import { IProduct } from 'src/app/shared/models/product.model';
import { ITrend } from 'src/app/shared/models/trend.model';
import { IPub } from 'src/app/shared/models/pub.model';
import { IInspire } from 'src/app/shared/models/inspire.model';
import { ProductsService } from 'src/app/shared/product.service';
import { TrendsService } from 'src/app/shared/trend.service';
import { PubsService } from 'src/app/shared/pub.service';
import { InspiresService } from 'src/app/shared/inspire.service';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  opened=false; 
  subscription1;
  subscription2;
  subscription3;
  subscription4;
  myProducts: IProduct[];
  myTrends: ITrend[];
  myPubs: IPub[];
  myInspires: IInspire[];
  contactForm: FormGroup;
  currentUser: IUser;
  existUser: IUser;
  constructor(private _productService: ProductsService,private _trendService: TrendsService,private _pubService: PubsService,private _inspireService: InspiresService,private router:Router,private authenticationService:AuthenticationService,private fb: FormBuilder,
    private contactsService: ContactsService,
    private snackBar: MatSnackBar) { 
    this.authenticationService.currentUser.subscribe(tmpUser=>this.currentUser=tmpUser);
  }

  ngOnInit(): void {
    this.subscription1 = this._productService.getAllProduct().
      pipe(
        map(
          (response: IApiResponse) => response.payload

        ),
        map((products: IProduct[]) => {
          let tmpProducts = products.map(product => {
            product.image_url = `${environment.API_URL}/${product.image_url}`;
            return product;
          });
          tmpProducts=tmpProducts.filter((product: IProduct) => {
            return product;
          });
          return tmpProducts;
        }),
      )
      .subscribe({
        next: (value) => {
          console.dir(value);
          this.myProducts = value
        },
        error: (error) => this.snackBar.open(error.message, 'Close'),
        complete: () => console.log('complete')
      });
      this.subscription2 = this._trendService.getAllTrend().
      pipe(
        map(
          (response: IApiResponse) => response.payload

        ),
        map((trends: ITrend[]) => {
          let tmpTrends = trends.map(trend => {
            trend.image_url = `${environment.API_URL}/${trend.image_url}`;
            return trend;
          });
          tmpTrends=tmpTrends.filter((trend: ITrend) => {
            return trend;
          });
          return tmpTrends;
        }),
      )
      .subscribe({
        next: (value) => {
          console.dir(value);
          this.myTrends = value
        },
        error: (error) => this.snackBar.open(error.message, 'Close'),
        complete: () => console.log('complete')
      });


      this.subscription3 = this._pubService.getAllPub().
      pipe(
        map(
          (response: IApiResponse) => response.payload

        ),
        map((pubs: IPub[]) => {
          let tmpPubs = pubs.map(pub => {
            pub.image_url = `${environment.API_URL}/${pub.image_url}`;
            return pub;
          });
          tmpPubs=tmpPubs.filter((pub: IPub) => {
            return pub;
          });
          return tmpPubs;
        }),
      )
      .subscribe({
        next: (value) => {
          console.dir(value);
          this.myPubs = value
        },
        error: (error) => this.snackBar.open(error.message, 'Close'),
        complete: () => console.log('complete')
      });
      this.subscription4 = this._inspireService.getAllInspire().
      pipe(
        map(
          (response: IApiResponse) => response.payload

        ),
        map((inspires: IInspire[]) => {
          let tmpInspires = inspires.map(inspire => {
            inspire.image_url = `${environment.API_URL}/${inspire.image_url}`;
            return inspire;
          });
          tmpInspires=tmpInspires.filter((inspire: IInspire) => {
            return inspire;
          });
          return tmpInspires;
        }),
      )
      .subscribe({
        next: (value) => {
          console.dir(value);
          this.myInspires = value
        },
        error: (error) => this.snackBar.open(error.message, 'Close'),
        complete: () => console.log('complete')
      });
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
  ngOnDestroy(): void {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
    this.subscription4.unsubscribe();

  }

  animation(e) {
    console.log(e);
  }

}
function getcurrentUser(): IUser {
  return JSON.parse(localStorage.getItem('currentUser'));
}
