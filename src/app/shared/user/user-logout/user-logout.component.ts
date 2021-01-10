import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.css']
})
export class UserLogoutComponent implements OnInit {

  @Input() currentUser;
  @Output() onLogout:EventEmitter<any>;
  constructor() { 
    this.onLogout=new EventEmitter();  
  }

  ngOnInit(): void {
  }
  logout(){
    this.onLogout.emit();
}
}
