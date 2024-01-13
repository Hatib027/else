import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentViewUpiComponent } from './payment-view-upi.component';

describe('PaymentViewUpiComponent', () => {
  let component: PaymentViewUpiComponent;
  let fixture: ComponentFixture<PaymentViewUpiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentViewUpiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentViewUpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
