import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetailsComponent } from './details/details.component';
import { FilterPipe } from './filter.pipe';

import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input'; 
import {MatMenuModule} from '@angular/material/menu'; 
import {MatBadgeModule} from '@angular/material/badge'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryChildrenComponent } from './category-children/category-children.component';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { AccountComponent } from './account/account.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { SignupComponent } from './signup/signup.component';
import { AuthenticationInterceptor } from './auth.interceptor';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CategoryComponent,
    PageNotFoundComponent,
    DetailsComponent,
    FilterPipe,
    CategoryChildrenComponent,
    SanitizeHtmlPipe,
    NavbarComponent,
    AccountComponent,
    FavoriteComponent,
    SignupComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatSnackBarModule,
    MatBadgeModule,
    NgbModule,

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
