import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawHomeComponent } from './withdraw-home.component';

describe('WithdrawHomeComponent', () => {
  let component: WithdrawHomeComponent;
  let fixture: ComponentFixture<WithdrawHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdrawHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithdrawHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
