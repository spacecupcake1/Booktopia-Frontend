import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './pages/page1/page1.component';
import { appCanActivate } from '../guard/app.auth.guard';
import { AppRoles } from '../app.roles';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { AuthortableComponent } from './pages/authortable/authortable.component';
import { AuthorformComponent } from './pages/authorform/authorform.component';
import { AwardtableComponent } from './pages/awardtable/awardtable.component';
import { AwardformComponent } from './pages/awardform/awardform.component';

const routes: Routes = [
  {
    path: '', component: LoginpageComponent
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
    path: 'auwardform', component: AwardformComponent, pathMatch: 'full', canActivate: [appCanActivate], data: {roles: [AppRoles.Admin]}
  },
  {
    path: 'awardform/:id', component: AwardformComponent, pathMatch: 'full', canActivate: [appCanActivate], data: {roles: [AppRoles.Admin]}
  },
  {
    path: 'page1', component: Page1Component, pathMatch: 'full', canActivate: [appCanActivate], data: {roles: [AppRoles.Admin]}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
