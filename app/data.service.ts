import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly fatap_api = "https://medic.fatap.ir/api/login" ;
  private readonly fatap_user = {mobile: "09155158224",password:"09155158224"}

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.post(this.fatap_api,this.fatap_user)
  }
}
