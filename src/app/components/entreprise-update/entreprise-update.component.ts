import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEntreprise } from 'src/app/shared/models/entreprise.model';

@Component({
  selector: 'app-entreprise-update',
  templateUrl: './entreprise-update.component.html',
  styleUrls: ['./entreprise-update.component.css']
})
export class EntrepriseUpdateComponent implements OnInit {
  currentEntreprise:IEntreprise;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data=>this.currentEntreprise=data.entreprise);
  }

}
