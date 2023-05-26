import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventobusComponent } from './eventobus.component';

describe('EventobusComponent', () => {
  let component: EventobusComponent;
  let fixture: ComponentFixture<EventobusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventobusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventobusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
