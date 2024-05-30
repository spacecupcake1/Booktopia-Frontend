import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardformComponent } from './awardform.component';

describe('AwardformComponent', () => {
  let component: AwardformComponent;
  let fixture: ComponentFixture<AwardformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AwardformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AwardformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
