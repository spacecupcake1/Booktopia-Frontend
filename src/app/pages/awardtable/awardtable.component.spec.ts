import { ComponentFixture, TestBed} from '@angular/core/testing';
import { AwardtableComponent } from './awardtable.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { createSpyFromClass } from 'jasmine-auto-spies';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { IsInRoleDirective } from '../../dir/is.in.role.dir';
import { IsInRolesDirective } from '../../dir/is.in.roles.dir';
import { AuthConfig, OAuthModule } from 'angular-oauth2-oidc';
import { authConfig } from '../../app.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AwardtableComponent', () => {
  let component: AwardtableComponent;
  let fixture: ComponentFixture<AwardtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatPaginator,
        MatPaginatorModule,
        MatTableModule,
        MatToolbarModule,
        BrowserAnimationsModule,
        OAuthModule.forRoot({resourceServer: {sendAccessToken: true}}),
      ],
      providers: [
        {provide: HttpClient, useValue: createSpyFromClass(HttpClient)},
        {provide: AuthConfig, useValue: authConfig},
        ],
      declarations: [AwardtableComponent,     IsInRoleDirective,
      IsInRolesDirective]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 
});