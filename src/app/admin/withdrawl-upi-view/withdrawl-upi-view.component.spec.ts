import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawlUpiViewComponent } from './withdrawl-upi-view.component';

describe('WithdrawlUpiViewComponent', () => {
  let component: WithdrawlUpiViewComponent;
  let fixture: ComponentFixture<WithdrawlUpiViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdrawlUpiViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithdrawlUpiViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
