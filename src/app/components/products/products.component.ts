import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from 'rxjs/operators';
import { IApiResponse } from 'src/app/shared/models/api-response.model';
import { IProduct } from 'src/app/shared/models/product.model';
import { ProductsService } from 'src/app/shared/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  myProducts: IProduct[];
  subscription1: any;
  constructor(private _productService: ProductsService,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.subscription1 = this._productService.getAllProduct().
      pipe(
        map(
          (response: IApiResponse) => response.payload

        ),
        map((products: IProduct[]) => {
          let tmpProducts = products.map(product => {
            
            
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
      
  }
  ngOnDestroy(): void {
    this.subscription1.unsubscribe();
    

  }
}
