import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankdetailsAdminComponent } from './bankdetails-admin.component';

describe('BankdetailsAdminComponent', () => {
  let component: BankdetailsAdminComponent;
  let fixture: ComponentFixture<BankdetailsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankdetailsAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankdetailsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
