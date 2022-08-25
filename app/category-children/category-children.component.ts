import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Category, Children, ResData } from '../ResData.model';

@Component({
  selector: 'app-category-children',
  templateUrl: './category-children.component.html',
  styleUrls: ['./category-children.component.css']
})
export class CategoryChildrenComponent implements OnInit {
  parsedData: any = [] ;
  Category : Category[] = [] ;
  CategoryChildren1: Children[] = [] ;
  CategoryChildren2: Children[] = [] ;
  CategoryChildren: Children[] = [] ;
  cc1: any = [] ;
  cc2: any = [] ;
  SelectedChildren: number ;

  constructor(public dialogRef: MatDialogRef<CategoryChildrenComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {id: number} ) {
                this.SelectedChildren = 0 ;
               }

  ngOnInit(): void {
    let Data: any = localStorage.getItem('Data')
    this.parsedData  = JSON.parse(Data) ; 
    this.Category = this.parsedData.categories ;
    this.CategoryChildren1.push(this.Category[4].children)
    this.CategoryChildren2.push(this.Category[6].children)
    this.cc1 = this.CategoryChildren1[0] ;
    this.cc2 = this.CategoryChildren2[0] ;
    this.SelectedChildren = this.data.id ;
  }

}
