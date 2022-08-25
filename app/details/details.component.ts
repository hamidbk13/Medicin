import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, TemplateRef} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FavoriteService } from '../favorite.service';
import { Contents, ResData, Tabs , Medias } from '../ResData.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  isTabOpening: boolean = false ;
  isLoading: boolean = false ;
  searchedText: string = '';
  parsedData: any = [] ;
  Contents: Contents[] = [] ;
  SelectedContentTabs: Tabs[] = [] ;
  SelectedContentMedias: Medias[] = [] ;
  favContent: Contents[] = [] ;

  constructor(private router: ActivatedRoute,
              private modalService: NgbModal,
              private snackbar: MatSnackBar,
              private favService: FavoriteService) { }

  
  ngOnInit(): void {
    const Category_id = this.router.snapshot.params['id'] ;
    this.parsedData = JSON.parse(localStorage.getItem('Data') as any);
    for (let content of this.parsedData.contents) {
      if (content.category_id == Category_id) {
        this.Contents.push(content)
      }
    }
    this.Contents.forEach(content =>  {
      content['isActive'] = true ; 
     }
    )
  }

  onAddToFavarite(content: Contents) {
    this.isLoading = true ;
    let name = content.name ;
    let en_name = content.en_name ;
    this.favService.AddContent({name: name,en_name: en_name}).subscribe({
      next: () => {this.snackbar.open(` اضافه شد ${content.en_name}`,'تایید',{duration:1000,verticalPosition:'top',horizontalPosition:'right'});
      this.isLoading = false ;
      content.isActive = true } ,
      error: (err : HttpErrorResponse) => {this.snackbar.open(`${err.message}`,'تایید',{duration: 1500});
      this.isLoading = false ; }
    })

  }

 onShowTabModal(tabs: TemplateRef<any>) {
  this.modalService.open(tabs,{centered: true,scrollable: true,size:'lg'})
 }

 onShowMediaModal(medias: TemplateRef<any>) {
  this.modalService.open(medias,{centered: true,scrollable: true,size:'lg'})
 }


}
