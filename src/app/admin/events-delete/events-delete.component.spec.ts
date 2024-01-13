import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsDeleteComponent } from './events-delete.component';

describe('EventsDeleteComponent', () => {
  let component: EventsDeleteComponent;
  let fixture: ComponentFixture<EventsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
