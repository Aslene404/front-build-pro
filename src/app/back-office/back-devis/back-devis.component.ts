import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DevisesService } from 'src/app/shared/devis.service';
import { IApiResponse } from 'src/app/shared/models/api-response.model';
import { IDevis } from 'src/app/shared/models/devis.model';

@Component({
  selector: 'app-back-devis',
  templateUrl: './back-devis.component.html',
  styleUrls: ['./back-devis.component.css']
})
export class BackDevisComponent implements OnInit {
  displayedColumns: string[] = [
    'role','fullname','email','phone','entreprise','numRegistre','cat','subcat','details','delete'
   
  ];
 private subscribtion;
  public ourDevis: IDevis[];
 
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  dataSource: MatTableDataSource<IDevis>;
  constructor(private devisService: DevisesService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllDevis();
  }
  getAllDevis() {
    this.subscribtion = this.devisService.getAllDevis()
      .subscribe(
        {
          next: (response: IApiResponse) => {
            this.ourDevis = response.payload;
            this.dataSource = new MatTableDataSource(this.ourDevis);
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
  deleteDevis(id) {
    this.devisService.deleteDevis(id).subscribe({
      next: (response: IApiResponse) => {
        this.ourDevis = response.payload;
      },
      error: error => {
        this.snackBar.open(error.message, 'Close');
      },
      complete: () => {
        this.getAllDevis();
      }
    }
    );
  }

  applyFilter(filterValue: string) {
    // console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.ourDevis)
  }
  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }

}
