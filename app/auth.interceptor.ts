import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private authservice: AuthService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Auth Interceptor Started...')
    const token = this.authservice.getToken ;

    if (token) {
        const cloned = req.clone({
            headers: req.headers.set("DTX-auth", token)
        });
        return next.handle(cloned);
    }
    else {
        return next.handle(req);
    }
  }
}
