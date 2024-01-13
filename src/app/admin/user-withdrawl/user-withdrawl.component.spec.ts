import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWithdrawlComponent } from './user-withdrawl.component';

describe('UserWithdrawlComponent', () => {
  let component: UserWithdrawlComponent;
  let fixture: ComponentFixture<UserWithdrawlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWithdrawlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserWithdrawlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
