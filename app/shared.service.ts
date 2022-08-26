import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  SignForm = new EventEmitter<{email: string,password: string, fullname:string}>() ;

  constructor() { }

}
