import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { IApiResponse } from 'src/app/shared/models/api-response.model';
import { IInspire } from 'src/app/shared/models/inspire.model';
import { InspiresService } from 'src/app/shared/inspire.service'
@Component({
  selector: 'app-back-inspire',
  templateUrl: './back-inspire.component.html',
  styleUrls: ['./back-inspire.component.css']
})
export class BackInspireComponent implements OnInit,OnDestroy {
  displayedColumns: string[] = [
    'name','cat','delete'
   
  ];
 private subscribtion;
  public ourInspires: IInspire[];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  dataSource: MatTableDataSource<IInspire>;
  inspireForm: FormGroup;
  createdInspire: IInspire;
  constructor(private _formBuilder: FormBuilder,
    private inspireService: InspiresService, 
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllInspires();
    this.inspireForm = this._formBuilder.group({
      name: ['', Validators.required],
      cat: ['', Validators.required]



    });
  }
  getAllInspires() {
    this.subscribtion = this.inspireService.getAllInspire()
      .subscribe(
        {
          next: (response: IApiResponse) => {
            this.ourInspires = response.payload;
            this.dataSource = new MatTableDataSource(this.ourInspires);
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
  deleteInspire(id) {
    this.inspireService.deleteInspire(id).subscribe({
      next: (response: IApiResponse) => {
        this.ourInspires = response.payload;
      },
      error: error => {
        this.snackBar.open(error.message, 'Close');
      },
      complete: () => {
        this.getAllInspires();
      }
    }
    );
  }

  applyFilter(filterValue: string) {
    // console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.ourInspires)
  }
  


  addInspire() {
    var inspire;
    inspire = {
      name: this.inspireForm.value.name,
      cat: this.inspireForm.value.cat
    }
    this.inspireService.addInspire(inspire).subscribe({
      next: (response: IApiResponse) => {
        this.snackBar.open(response.message, 'Close', { duration: 5000 });
        this.createdInspire = response.payload


      },
      error: (error) => this.snackBar.open('Unable to reach API', 'Close'),
      complete: () => console.log("fine")

    });
    
  }
  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }
  refresh(event) {
    console.log(event)
  }
  
    
}
