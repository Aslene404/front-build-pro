import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { IApiResponse } from 'src/app/shared/models/api-response.model';
import { IProduct } from 'src/app/shared/models/product.model';
import { ProductsService } from 'src/app/shared/product.service'
@Component({
  selector: 'app-back-product',
  templateUrl: './back-product.component.html',
  styleUrls: ['./back-product.component.css']
})
export class BackProductComponent implements OnInit {
  displayedColumns: string[] = [
    'name','price','delete'
   
  ];
 private subscribtion;
  public ourProducts: IProduct[];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  dataSource: MatTableDataSource<IProduct>;
  productForm: FormGroup;
  createdProduct: IProduct;
  constructor(private _formBuilder: FormBuilder,
    private productService: ProductsService, 
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllProducts();
    this.productForm = this._formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required]



    });
  }
  getAllProducts() {
    this.subscribtion = this.productService.getAllProduct()
      .subscribe(
        {
          next: (response: IApiResponse) => {
            this.ourProducts = response.payload;
            this.dataSource = new MatTableDataSource(this.ourProducts);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            this.snackBar.open(response.message, "Close");
          },
          error: error => {
            this.snackBar.open(error.message, 'Close');
          },
          complete: () => console.log
        });
  }
  deleteProduct(id) {
    this.productService.deleteProduct(id).subscribe({
      next: (response: IApiResponse) => {
        this.ourProducts = response.payload;
      },
      error: error => {
        this.snackBar.open(error.message, 'Close');
      },
      complete: () => {
        this.getAllProducts();
      }
    }
    );
  }

  applyFilter(filterValue: string) {
    // console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.ourProducts)
  }
  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }


  addProduct() {
    var product;
    product = {
      name: this.productForm.value.name,
      price: this.productForm.value.price
    }
    this.productService.addProduct(product).subscribe({
      next: (response: IApiResponse) => {
        this.snackBar.open(response.message, 'Close', { duration: 5000 });
        this.createdProduct = response.payload


      },
      error: (error) => this.snackBar.open('Unable to reach API', 'Close'),
      complete: () => console.log("fine")

    });
    
  }
  refresh(event) {
    console.log(event)
  }
  
    
}
