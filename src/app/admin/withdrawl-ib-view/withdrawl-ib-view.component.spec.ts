import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawlIbViewComponent } from './withdrawl-ib-view.component';

describe('WithdrawlIbViewComponent', () => {
  let component: WithdrawlIbViewComponent;
  let fixture: ComponentFixture<WithdrawlIbViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdrawlIbViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithdrawlIbViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
