import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { CategoryChildrenComponent } from '../category-children/category-children.component';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Category, ResData } from '../ResData.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  searchedText: string = '';
  parsedData: any ;
  Categories: Category[] ;

  constructor(private authservice: AuthService,
              private route: Router,
              public dialog: MatDialog) {  
        this.parsedData = JSON.parse(localStorage.getItem('Data') as any) ;
        this.Categories = this.parsedData.categories ;    
   }

  ngOnInit() {
  }

  openDialog(ID: number) {
    this.dialog.open(CategoryChildrenComponent,{ data: {id: ID}});
  }

  onLogOut() {
    this.authservice.Logout()
  }

}

