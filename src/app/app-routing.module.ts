import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';
import { appCanActivate } from '../guard/app.auth.guard';
import { AppRoles } from '../app.roles';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';

const routes: Routes = [
  {
    path: '', component: LoginpageComponent
  },
  {
    path: 'main', component: MainpageComponent, pathMatch: 'full', canActivate: [appCanActivate], data: {roles: [AppRoles.Admin]}
  },
  {
    path: 'page1', component: Page1Component, pathMatch: 'full', canActivate: [appCanActivate], data: {roles: [AppRoles.Admin]}
  },
  {
    path: 'page2', component: Page2Component, pathMatch: 'full'
  },
  {
    path: 'page3', component: Page3Component, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
