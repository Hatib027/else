import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferEarningHistoryComponent } from './refer-earning-history.component';

describe('ReferEarningHistoryComponent', () => {
  let component: ReferEarningHistoryComponent;
  let fixture: ComponentFixture<ReferEarningHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferEarningHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferEarningHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
