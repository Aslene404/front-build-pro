import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IApiResponse } from 'src/app/shared/models/api-response.model';
import { IUser } from 'src/app/shared/user/user.model';
import { UserService } from 'src/app/shared/user/user.service';

@Component({
  selector: 'app-back-home',
  templateUrl: './back-home.component.html',
  styleUrls: ['./back-home.component.css']
})
export class BackHomeComponent implements OnInit {
  displayedColumns: string[] = [
  'fullusername','email','phone','role','update','reupdate','adminupdate','delete'
 
];
private subscribtion;
  public ourUser: IUser[];
 
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  dataSource: MatTableDataSource<IUser>;
  constructor(private userService: UserService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers() {
    this.subscribtion = this.userService.getAllUsers()
      .subscribe(
        {
          next: (response: IApiResponse) => {
            
               
            this.ourUser = response.payload;
            this.dataSource = new MatTableDataSource(this.ourUser);
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
    this.userService.deleteUser(id).subscribe({
      next: (response: IApiResponse) => {
        this.ourUser = response.payload;
      },
      error: error => {
        this.snackBar.open(error.message, 'Close');
      },
      complete: () => {
        this.getAllUsers();
      }
    }
    );
  }
  updateUserRole(id){
    this.userService.updateUserRole(id,"ENTREPRISE").subscribe({
      next: (response: IApiResponse) => {
        this.ourUser = response.payload;
      },
      error: error => {
        this.snackBar.open(error.message, 'Close');
      },
      complete: () => {
        this.getAllUsers();
      }
    })
  }
  reupdateUserRole(id){
    this.userService.updateUserRole(id,"GUEST").subscribe({
      next: (response: IApiResponse) => {
        this.ourUser = response.payload;
      },
      error: error => {
        this.snackBar.open(error.message, 'Close');
      },
      complete: () => {
        this.getAllUsers();
      }
    })
  }
  adminupdateUserRole(id){
    this.userService.updateUserRole(id,"ADMIN").subscribe({
      next: (response: IApiResponse) => {
        this.ourUser = response.payload;
      },
      error: error => {
        this.snackBar.open(error.message, 'Close');
      },
      complete: () => {
        this.getAllUsers();
      }
    })
  }

  applyFilter(filterValue: string) {
    // console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.ourUser)
  }
  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }

}
