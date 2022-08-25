import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { Contents } from '../ResData.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() searchText: string = "" ;
  @Output() searchTextChange = new EventEmitter<string>() ;
  isSideNavOpen : boolean = false ;
  @Input() FavItem: Contents[] = [] ;
  FavItemNumber: number = this.FavItem.length ;
  onWhatPath: any;

  constructor(private authservice: AuthService,
             private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.onWhatPath = this.route.snapshot.routeConfig?.path ;
  }

  @HostListener('input') function() {
    this.searchTextChange.emit(this.searchText)
  }

  onLogOut() {
    this.authservice.Logout()
  }


}
