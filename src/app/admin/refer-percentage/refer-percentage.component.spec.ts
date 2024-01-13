import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferPercentageComponent } from './refer-percentage.component';

describe('ReferPercentageComponent', () => {
  let component: ReferPercentageComponent;
  let fixture: ComponentFixture<ReferPercentageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferPercentageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
