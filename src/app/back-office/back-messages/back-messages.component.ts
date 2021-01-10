import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IApiResponse } from 'src/app/shared/models/api-response.model';
import { IContact } from 'src/app/shared/models/contact.model';
import { ContactsService } from 'src/app/shared/contact.service';

@Component({
  selector: 'app-back-messages',
  templateUrl: './back-messages.component.html',
  styleUrls: ['./back-messages.component.css']
})
export class BackMessagesComponent implements OnInit {
  displayedColumns: string[] = [
    'fullname','email','phone','opinion','delete'
   
  ];
 private subscribtion;
  public ourContact: IContact[];
 
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  dataSource: MatTableDataSource<IContact>;

  constructor(private contactService: ContactsService,
    private snackBar: MatSnackBar) { }

    ngOnInit() {
      this.getAllContact();
      
    }
    getAllContact() {
      this.subscribtion = this.contactService.getAllContact()
        .subscribe(
          {
            next: (response: IApiResponse) => {
              this.ourContact = response.payload;
              this.dataSource = new MatTableDataSource(this.ourContact);
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
    
    deleteContact(id) {
      this.contactService.deleteContact(id).subscribe({
        next: (response: IApiResponse) => {
          this.ourContact = response.payload;
        },
        error: error => {
          this.snackBar.open(error.message, 'Close');
        },
        complete: () => {
          this.getAllContact();
        }
      }
      );
    }
  
    applyFilter(filterValue: string) {
      // console.log(filterValue);
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  
    ngOnChanges() {
      this.dataSource = new MatTableDataSource(this.ourContact)
    }
    ngOnDestroy(): void {
      this.subscribtion.unsubscribe();
    }

}
