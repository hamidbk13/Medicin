import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../User.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isloading = false;
  resolving: boolean = false ;
  error_message: string = '' ;
  success_message: string = '' ;

  constructor(private router: Router,
              private authservice: AuthService) { }

  onLogin(userdata : {email: string,password: string}) {
       this.success_message = '' ;
       this.error_message = '' ;
       this.isloading = true ;
       this.authservice.Login(userdata).subscribe({
       next: (res) => {
        this.isloading = false;
        console.log(res);
        this.success_message = res.message ;
        localStorage.setItem('email',userdata.email) ;
        localStorage.setItem('password',userdata.password) ;
        this.resolving = true ;
        this.router.navigate(['/category'],{queryParams:{login: 'success'}});
        },
        error: (err: HttpErrorResponse)=> {
        console.log(err),
        this.error_message = err.error.message,
        this.isloading = false
        }
      })
  }

  

  ngOnInit(): void {
    if(this.authservice.isAuthenticated) {
      this.router.navigate(['/category'])
    }
  }

  
}
