import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventobusninoComponent } from './eventobusnino.component';

describe('EventobusninoComponent', () => {
  let component: EventobusninoComponent;
  let fixture: ComponentFixture<EventobusninoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventobusninoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventobusninoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
