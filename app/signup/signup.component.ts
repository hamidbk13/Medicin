import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isloading = false;
  message: string = '' ;
  
  constructor(private authservice: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSignUp(userInfo: {email: string,password: string, fullname:string}) {
    this.isloading = true ;
    this.authservice.signUp(userInfo).subscribe({
      next: (res) => {
        console.log(res)
        this.router.navigate(['/login']) ;
        this.isloading = false ;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err); 
        this.message = err.error.message;
        this.isloading = false ;
      },
      
    })
  }

}
