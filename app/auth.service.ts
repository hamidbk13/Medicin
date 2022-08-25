import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginResp } from './loginResp.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private dotenx_api = "https://api.dotenx.com/user/management/project/6wsS33NDmr6W7IfQ" ;

  userIsLogin: BehaviorSubject<boolean>;

  constructor(private http: HttpClient,private router: Router) {
    this.userIsLogin = new BehaviorSubject<boolean>(this.hasToken) ;
  }

  Login(info: {email: string,password: string}) : Observable<LoginResp> {
    console.log('Logging in...')   
    return this.http.post<LoginResp>(`${this.dotenx_api}/login`,info).pipe(
      map((res) => {
        localStorage.setItem('loginRes',JSON.stringify(res));
        this.userIsLogin.next(!!localStorage.getItem('loginRes'))
        return res
      })
    )
  }

  signUp(info: {email: string,password: string, fullname:string}) {
    return this.http.post(`${this.dotenx_api}/register`,info)
  }

  get hasToken(): boolean {
    return !!localStorage.getItem('loginRes');
  }

  get getToken() {
    return localStorage.getItem('accessToken');
  }

  AutoLogOut() {
    
  }


  get isAuthenticated(): boolean {
    return !!this.userIsLogin.getValue(); 
  }

Logout() {
  localStorage.removeItem('loginRes') ;
  localStorage.removeItem('email') ;
  localStorage.removeItem('password') ;
  this.userIsLogin.next(false) ;
  this.router.navigate(['/login']) ;
}


}
