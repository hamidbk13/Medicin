import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authservice: AuthService, private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean> | boolean | UrlTree{
    console.log('Auth Guard started ...');
    if(!this.authservice.isAuthenticated) {
      this.router.navigate(['/login']);
    }
    return this.authservice.isAuthenticated;
   } 
}
