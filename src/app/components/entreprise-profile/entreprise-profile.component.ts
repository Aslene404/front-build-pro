import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { EntreprisesService } from 'src/app/shared/entreprise.service';
import { E_projectssService } from 'src/app/shared/e_projects.service';
import { IApiResponse } from 'src/app/shared/models/api-response.model';
import { IEntreprise } from 'src/app/shared/models/entreprise.model';
import { IE_projects } from 'src/app/shared/models/e_projects.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-entreprise-profile',
  templateUrl: './entreprise-profile.component.html',
  styleUrls: ['./entreprise-profile.component.css']
})
export class EntrepriseProfileComponent implements OnInit {
  id;
  subscription;
  myEntreprise: IEntreprise;
  
  myProjects:IE_projects[];
  constructor(private route: ActivatedRoute, private _entrepriseService: EntreprisesService, private snackBar: MatSnackBar, private _e_projectsService: E_projectssService) { }

  ngOnInit(): void {
this.id= this.route.snapshot.paramMap.get("id");
console.log(this.id);
this.subscription=this._entrepriseService.getEntrepriseById(this.id)




.pipe(
  map(
    (response: IApiResponse) => response.payload

  ),
  map((entreprises: IEntreprise) => {
    
    
    return entreprises;
  }),
)
.subscribe({
  next: (value) => {
    
    this.myEntreprise = value;
    
    
  },
  error: (error) => this.snackBar.open(error.message, 'Close'),
  complete: () => console.log('complete')
});


this.subscription = this._e_projectsService.getAllE_projects().
      pipe(
        map(
          (response: IApiResponse) => response.payload

        ),
        map((e_projects: IE_projects[]) => {
          let tmpE_projects = e_projects.map(e_project => {
            
            return e_project;
          });
          tmpE_projects=tmpE_projects.filter((e_project: IE_projects) => {
            if (e_project.entreprise===this.id)
            return e_project;
          });
          return tmpE_projects;
        }),
      )
      .subscribe({
        next: (value) => {
          console.dir(value);
          this.myProjects = value
        },
        error: (error) => this.snackBar.open(error.message, 'Close'),
        complete: () => console.log('complete')
      });



}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
