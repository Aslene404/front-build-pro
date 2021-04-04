import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from 'rxjs/operators';
import { InspiresService } from 'src/app/shared/inspire.service';
import { IApiResponse } from 'src/app/shared/models/api-response.model';
import { IInspire } from 'src/app/shared/models/inspire.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-inspire',
  templateUrl: './inspire.component.html',
  styleUrls: ['./inspire.component.css']
})
export class InspireComponent implements OnInit {
  subscription4: any;
  myInspires: IInspire[];
  constructor(private _inspireService:InspiresService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
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
      
  }
  
}
