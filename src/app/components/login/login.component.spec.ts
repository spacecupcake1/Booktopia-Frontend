import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AuthConfig, OAuthModule} from 'angular-oauth2-oidc';
import {HttpClient} from '@angular/common/http';
import {createSpyFromClass} from 'jasmine-auto-spies';
import { authConfig } from '../../app.module';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        OAuthModule.forRoot({resourceServer: {sendAccessToken: true}}),
      ],
      providers: [
        {provide: HttpClient, useValue: createSpyFromClass(HttpClient)},
        {provide: AuthConfig, useValue: authConfig}],
      declarations: [LoginComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
