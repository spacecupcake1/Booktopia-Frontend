import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorformComponent } from './authorform.component';

describe('AuthorformComponent', () => {
  let component: AuthorformComponent;
  let fixture: ComponentFixture<AuthorformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthorformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthorformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
