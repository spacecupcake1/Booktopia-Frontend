import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatalistComponent } from './components/datalist/datalist.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import {MatPaginator} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Page1Component } from './pages/page1/page1.component';
import {AuthConfig, OAuthModule, OAuthStorage} from 'angular-oauth2-oidc';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpXSRFInterceptor } from './interceptor/http.csrf.interceptor';
import {MatIconModule} from '@angular/material/icon';
import { AppAuthService } from './service/app.auth.service';
import { IsInRoleDirective } from './dir/is.in.role.dir';
import { IsInRolesDirective } from './dir/is.in.roles.dir';
import { ChildComponent } from './components/child/child.component';
import { LoginComponent } from './components/login/login.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { AuthortableComponent } from './pages/authortable/authortable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthorformComponent } from './pages/authorform/authorform.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AwardtableComponent } from './pages/awardtable/awardtable.component';
import { AwardformComponent } from './pages/awardform/awardform.component';



export const authConfig: AuthConfig = {
  issuer: 'http://localhost:8080/realms/Booktopia',
  requireHttps: false,
  redirectUri: 'http://localhost:4200',
  postLogoutRedirectUri: 'http://localhost:4200',
  clientId: 'booktopia',
  scope: 'openid profile roles offline_access',
  responseType: 'code',
  showDebugInformation: true,
  requestAccessToken: true,
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  silentRefreshTimeout: 500,
  clearHashAfterLogin: true,
};

export function storageFactory(): OAuthStorage {
  return sessionStorage;
}


@NgModule({
  declarations: [
    AppComponent,
    DatalistComponent,
    Page1Component,
    IsInRoleDirective,
    IsInRolesDirective,
    ChildComponent,
    LoginComponent,
    LoginpageComponent,
    AuthortableComponent,
    AuthorformComponent,
    AwardtableComponent,
    AwardformComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OAuthModule.forRoot({resourceServer: {sendAccessToken: true}}),
    AppRoutingModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatPaginator,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN'
    }),
  ],
  providers: [
    provideAnimationsAsync(),
    {provide: AuthConfig, useValue: authConfig},
    {provide: HTTP_INTERCEPTORS, useClass: HttpXSRFInterceptor, multi: true},
    {
      provide: OAuthStorage, useFactory: storageFactory
    },
    Location, {provide: LocationStrategy, useClass: PathLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(authService: AppAuthService) {
    authService.initAuth().finally();
  }
}
