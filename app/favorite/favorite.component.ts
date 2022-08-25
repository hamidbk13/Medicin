import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../favorite.service';
import { Favorites } from '../favorites_model';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  favorites: Favorites[] = [] ;
  data = {} ;
  isLoading: boolean = false ;

  constructor(private favService: FavoriteService) { }

  ngOnInit(): void {
  }

  onGetContent() {
    this.isLoading = true ;
    this.favService.GetContent(this.data).subscribe({
      next: (res) => {this.favorites = res ; this.isLoading = false } ,
      error: () => this.isLoading = false 
    })
  }

  onDeleteItem(item: Favorites) {
    this.favService.DeleteContentById(item.id).subscribe() ;
    let index = this.favorites.findIndex((value: any) => value.id == item.id) ;
    this.favorites.splice(index,1) ;
  }

}
