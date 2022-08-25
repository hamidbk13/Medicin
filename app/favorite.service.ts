import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Favorites } from './favorites_model';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private _api_part1 = "https://api.dotenx.com/database/query" ;
  private _api_part2 = "project/W4GrUGhpP3XFqyMU/table/favorite_content" ;

  // Access TOken
  private headers = new HttpHeaders()
        .set("DTX-auth","dtx_JXdkTLE61wT0rnqiFysr2Kuh3KJBTV8O") 

  constructor(private http: HttpClient) { }

  AddContent(content: {name: string, en_name: string}) {
   return this.http.post(`${this._api_part1}/insert/${this._api_part2}`,content,{headers: this.headers}) ;
  }
  GetContent(content = {}) : Observable<Favorites[]> {
   return this.http.post<Favorites[]>(`${this._api_part1}/select/${this._api_part2}`,content,{headers: this.headers}) ;
  }
  UpdateContentById(content: {id:number,name: string, en_name: string}) {
   return this.http.put(`${this._api_part1}/update/${this._api_part2}/row/${content.id}`,content,{headers: this.headers}) ;
  }
  DeleteContentById(id: number) {
   return this.http.delete(`${this._api_part1}/delete/${this._api_part2}/row/${id}`,{headers: this.headers}) ;
  }
}
