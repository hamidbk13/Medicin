import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private _api = "" ;

  constructor(private snackbar: MatSnackBar,
              private http: HttpClient)  { }

  ngOnInit(): void {
  }

  onCommentSubmit(comment: string) {
    this.http.post(this._api,comment).subscribe({
      next: () => {this.snackbar.open('نظر شما با موفقیت ثبت شد','تایید',{duration: 2000})},
      error: (error: HttpErrorResponse) => {this.snackbar.open(`${error.message}`,'تایید',{duration: 2000})}
    })
  }

}
