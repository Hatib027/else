import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpiActionComponent } from './upi-action.component';

describe('UpiActionComponent', () => {
  let component: UpiActionComponent;
  let fixture: ComponentFixture<UpiActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpiActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpiActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
