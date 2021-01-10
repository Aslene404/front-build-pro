import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { map } from 'rxjs/operators';
import { EntreprisesService } from 'src/app/shared/entreprise.service';
import { IApiResponse } from 'src/app/shared/models/api-response.model';
import { IEntreprise } from 'src/app/shared/models/entreprise.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-espace-entreprise',
  templateUrl: './espace-entreprise.component.html',
  styleUrls: ['./espace-entreprise.component.css']
})
export class EspaceEntrepriseComponent implements OnInit {
  opened=false; 
  subscription;
  myEntreprises: IEntreprise[];
  constructor(private _entrepriseService: EntreprisesService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.subscription = this._entrepriseService.getAllEntreprise().
      pipe(
        map(
          (response: IApiResponse) => response.payload

        ),
        map((entreprises: IEntreprise[]) => {
          let tmpEntreprises = entreprises.map(entreprise => {
            entreprise.logo_url = `${environment.API_URL}/${entreprise.logo_url}`;
            return entreprise;
          });
          tmpEntreprises=tmpEntreprises.filter((entreprise: IEntreprise) => {
            return entreprise;
          });
          return tmpEntreprises;
        }),
      )
      .subscribe({
        next: (value) => {
          console.dir(value);
          this.myEntreprises = value
        },
        error: (error) => this.snackBar.open(error.message, 'Close'),
        complete: () => console.log('complete')
      });

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  animation(e) {
    console.log(e);
  }
}
