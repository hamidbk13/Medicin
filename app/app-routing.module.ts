import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryComponent } from './category/category.component';
import { DetailsComponent } from './details/details.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccountComponent } from './account/account.component';
import { SignupComponent } from './signup/signup.component';
import { DataResolver } from './data.resolver';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login',component:LoginComponent },
  { path: 'signup',component:SignupComponent },
  {path: 'account',canActivate: [AuthGuard],component: AccountComponent},
  { path: 'category', resolve: {data: DataResolver}, canActivate: [AuthGuard] , component: CategoryComponent },
  { path: 'details/:id' ,canActivate: [AuthGuard], component: DetailsComponent },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
