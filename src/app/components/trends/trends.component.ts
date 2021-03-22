import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from 'rxjs/operators';
import { IApiResponse } from 'src/app/shared/models/api-response.model';
import { ITrend } from 'src/app/shared/models/trend.model';
import { TrendsService } from 'src/app/shared/trend.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {
  myTrends: ITrend[];
  subscription2: any;

  constructor(private _trendService: TrendsService,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.subscription2 = this._trendService.getAllTrend().
      pipe(
        map(
          (response: IApiResponse) => response.payload

        ),
        map((trends: ITrend[]) => {
          let tmpTrends = trends.map(trend => {
            trend.image_url = `${environment.API_URL}/${trend.image_url}`;
            return trend;
          });
          tmpTrends=tmpTrends.filter((trend: ITrend) => {
            return trend;
          });
          return tmpTrends;
        }),
      )
      .subscribe({
        next: (value) => {
          console.dir(value);
          this.myTrends = value
        },
        error: (error) => this.snackBar.open(error.message, 'Close'),
        complete: () => console.log('complete')
      });
  }
  ngOnDestroy(): void {
    
    this.subscription2.unsubscribe();
    

  }
}
