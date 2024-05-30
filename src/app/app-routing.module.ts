import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appCanActivate } from '../guard/app.auth.guard';
import { AppRoles } from '../app.roles';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { AuthortableComponent } from './pages/authortable/authortable.component';
import { AuthorformComponent } from './pages/authorform/authorform.component';
import { AwardtableComponent } from './pages/awardtable/awardtable.component';
import { AwardformComponent } from './pages/awardform/awardform.component';
import { GenretableComponent } from './pages/genretable/genretable.component';
import { GenreformComponent } from './pages/genreform/genreform.component';
import { BooktableComponent } from './pages/booktable/booktable.component';
import { BookformComponent } from './pages/bookform/bookform.component';

const routes: Routes = [
  {
    path: '', component: LoginpageComponent
  },
  {
    path: 'booktable', component: BooktableComponent
  },
  {
    path: 'bookform', component: BookformComponent, pathMatch: 'full', canActivate: [appCanActivate], data: {roles: [AppRoles.Admin]}
  },
  {
    path: 'bookform/:id', component: BookformComponent, pathMatch: 'full', canActivate: [appCanActivate], data: {roles: [AppRoles.Admin]}
  },
  {
    path: 'authortable', component: AuthortableComponent
  },
  {
    path: 'authorform', component: AuthorformComponent, pathMatch: 'full', canActivate: [appCanActivate], data: {roles: [AppRoles.Admin]}
  },
  {
    path: 'authorform/:id', component: AuthorformComponent, pathMatch: 'full', canActivate: [appCanActivate], data: {roles: [AppRoles.Admin]}
  },
  {
    path: 'awardtable', component: AwardtableComponent
  },
  {
    path: 'awardform', component: AwardformComponent, pathMatch: 'full', canActivate: [appCanActivate], data: {roles: [AppRoles.Admin]}
  },
  {
    path: 'awardform/:id', component: AwardformComponent, pathMatch: 'full', canActivate: [appCanActivate], data: {roles: [AppRoles.Admin]}
  },
  {
    path: 'genretable', component: GenretableComponent
  },
  {
    path: 'genreform', component:  GenreformComponent, pathMatch: 'full', canActivate: [appCanActivate], data: {roles: [AppRoles.Admin]}
  },
  {
    path: 'genreform/:id', component:  GenreformComponent, pathMatch: 'full', canActivate: [appCanActivate], data: {roles: [AppRoles.Admin]}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
