import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenretableComponent } from './genretable.component';

describe('GenretableComponent', () => {
  let component: GenretableComponent;
  let fixture: ComponentFixture<GenretableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenretableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenretableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
