import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  email: string | null = '';
  password: string | null = '';

  constructor() { 
  }

  ngOnInit(): void {
    this.email = localStorage.getItem("email") ;
    this.password = localStorage.getItem("password") ;
  }

}
