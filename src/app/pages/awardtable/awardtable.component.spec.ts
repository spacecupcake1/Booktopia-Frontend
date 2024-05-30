import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardtableComponent } from './awardtable.component';

describe('AwardtableComponent', () => {
  let component: AwardtableComponent;
  let fixture: ComponentFixture<AwardtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AwardtableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AwardtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
