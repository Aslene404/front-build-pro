import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { IApiResponse } from 'src/app/shared/models/api-response.model';
import { ITrend } from 'src/app/shared/models/trend.model';
import { TrendsService } from 'src/app/shared/trend.service'
@Component({
  selector: 'app-back-trend',
  templateUrl: './back-trend.component.html',
  styleUrls: ['./back-trend.component.css']
})
export class BackTrendComponent implements OnInit {
  displayedColumns: string[] = [
    'name','price','delete'
   
  ];
 private subscribtion;
  public ourTrends: ITrend[];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  dataSource: MatTableDataSource<ITrend>;
  trendForm: FormGroup;
  createdTrend: ITrend;
  constructor(private _formBuilder: FormBuilder,
    private trendService: TrendsService, 
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllTrends();
    this.trendForm = this._formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required]



    });
  }
  getAllTrends() {
    this.subscribtion = this.trendService.getAllTrend()
      .subscribe(
        {
          next: (response: IApiResponse) => {
            this.ourTrends = response.payload;
            this.dataSource = new MatTableDataSource(this.ourTrends);
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
  deleteTrend(id) {
    this.trendService.deleteTrend(id).subscribe({
      next: (response: IApiResponse) => {
        this.ourTrends = response.payload;
      },
      error: error => {
        this.snackBar.open(error.message, 'Close');
      },
      complete: () => {
        this.getAllTrends();
      }
    }
    );
  }

  applyFilter(filterValue: string) {
    // console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.ourTrends)
  }
  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }


  addTrend() {
    var trend;
    trend = {
      name: this.trendForm.value.name,
      price: this.trendForm.value.price
    }
    this.trendService.addTrend(trend).subscribe({
      next: (response: IApiResponse) => {
        this.snackBar.open(response.message, 'Close', { duration: 5000 });
        this.createdTrend = response.payload


      },
      error: (error) => this.snackBar.open('Unable to reach API', 'Close'),
      complete: () => console.log("fine")

    });
    
  }
  refresh(event) {
    console.log(event)
  }
  
    
}
