import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { IApiResponse } from 'src/app/shared/models/api-response.model';
import { IPub } from 'src/app/shared/models/pub.model';
import { PubsService } from 'src/app/shared/pub.service'
@Component({
  selector: 'app-back-pub',
  templateUrl: './back-pub.component.html',
  styleUrls: ['./back-pub.component.css']
})
export class BackPubComponent implements OnInit,OnDestroy {
  displayedColumns: string[] = [
    'name','price','delete'
   
  ];
 private subscribtion;
  public ourPubs: IPub[];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  dataSource: MatTableDataSource<IPub>;
  pubForm: FormGroup;
  createdPub: IPub;
  constructor(private _formBuilder: FormBuilder,
    private pubService: PubsService, 
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllPubs();
    this.pubForm = this._formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required]



    });
  }
  getAllPubs() {
    this.subscribtion = this.pubService.getAllPub()
      .subscribe(
        {
          next: (response: IApiResponse) => {
            this.ourPubs = response.payload;
            this.dataSource = new MatTableDataSource(this.ourPubs);
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
  deletePub(id) {
    this.pubService.deletePub(id).subscribe({
      next: (response: IApiResponse) => {
        this.ourPubs = response.payload;
      },
      error: error => {
        this.snackBar.open(error.message, 'Close');
      },
      complete: () => {
        this.getAllPubs();
      }
    }
    );
  }

  applyFilter(filterValue: string) {
    // console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.ourPubs)
  }
  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }


  addPub() {
    var pub;
    pub = {
      name: this.pubForm.value.name,
      price: this.pubForm.value.price
    }
    this.pubService.addPub(pub).subscribe({
      next: (response: IApiResponse) => {
        this.snackBar.open(response.message, 'Close', { duration: 5000 });
        this.createdPub = response.payload


      },
      error: (error) => this.snackBar.open('Unable to reach API', 'Close'),
      complete: () => console.log("fine")

    });
    
  }
  refresh(event) {
    console.log(event)
  }
  
    
}
