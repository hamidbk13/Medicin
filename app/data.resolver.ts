import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { DataService } from './data.service';
import { ResData } from './ResData.model';

@Injectable({
  providedIn: 'root'
})
export class DataResolver implements Resolve<ResData>  {

  constructor(private dataservice: DataService) {}

  resolve(): Observable<any> {
    console.log('called get category in resolver')
    if(!localStorage.getItem('Data')) {
          return this.dataservice.getData().pipe(map((data)=> {
            localStorage.setItem('Data',JSON.stringify(data))
          }))
    }
    return of(true)
  }
}
