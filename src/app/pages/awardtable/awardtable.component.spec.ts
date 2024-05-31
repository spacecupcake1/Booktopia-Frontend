import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardtableComponent } from './awardtable.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginator} from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar'; 

describe('AwardtableComponent', () => {
  let component: AwardtableComponent;
  let fixture: ComponentFixture<AwardtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        BrowserAnimationsModule,
        MatPaginator,
        MatToolbarModule
      ],
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
