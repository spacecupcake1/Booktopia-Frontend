import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthortableComponent } from './authortable.component';

describe('AuthortableComponent', () => {
  let component: AuthortableComponent;
  let fixture: ComponentFixture<AuthortableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthortableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthortableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
