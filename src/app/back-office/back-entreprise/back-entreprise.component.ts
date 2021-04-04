import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EntreprisesService } from 'src/app/shared/entreprise.service';
import { IApiResponse } from 'src/app/shared/models/api-response.model';
import { IEntreprise } from 'src/app/shared/models/entreprise.model';

@Component({
  selector: 'app-back-entreprise',
  templateUrl: './back-entreprise.component.html',
  styleUrls: ['./back-entreprise.component.css']
})
export class BackEntrepriseComponent implements OnInit {

  displayedColumns: string[] = [
    'name','about','phone','email','fb','website','delete'
   
  ];
 private subscribtion;
  public ourEntreprise: IEntreprise[];
 
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  dataSource: MatTableDataSource<IEntreprise>;

  constructor(private entrepriseService: EntreprisesService,
    private snackBar: MatSnackBar) { }

    ngOnInit() {
      this.getAllEntreprise();
      
    }
    getAllEntreprise() {
      this.subscribtion = this.entrepriseService.getAllEntreprise()
        .subscribe(
          {
            next: (response: IApiResponse) => {
              this.ourEntreprise = response.payload;
              this.dataSource = new MatTableDataSource(this.ourEntreprise);
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
    
    deleteEntreprise(id) {
      this.entrepriseService.deleteEntreprise(id).subscribe({
        next: (response: IApiResponse) => {
          this.ourEntreprise = response.payload;
        },
        error: error => {
          this.snackBar.open(error.message, 'Close');
        },
        complete: () => {
          this.getAllEntreprise();
        }
      }
      );
    }
  
    applyFilter(filterValue: string) {
      // console.log(filterValue);
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  
    ngOnChanges() {
      this.dataSource = new MatTableDataSource(this.ourEntreprise)
    }
    ngOnDestroy(): void {
      this.subscribtion.unsubscribe();
    }


}
