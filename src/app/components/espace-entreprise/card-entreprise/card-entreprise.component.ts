import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-entreprise',
  templateUrl: './card-entreprise.component.html',
  styleUrls: ['./card-entreprise.component.css']
})
export class CardEntrepriseComponent implements OnInit {
  @Input('') entreprise: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.entreprise);
  }
  
  
  flip = false;
  rotate() {
    this.flip = !this.flip;
  }
}
