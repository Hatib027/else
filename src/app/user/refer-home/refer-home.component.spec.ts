import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferHomeComponent } from './refer-home.component';

describe('ReferHomeComponent', () => {
  let component: ReferHomeComponent;
  let fixture: ComponentFixture<ReferHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
