import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventobusrunComponent } from './eventobusrun.component';

describe('EventobusrunComponent', () => {
  let component: EventobusrunComponent;
  let fixture: ComponentFixture<EventobusrunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventobusrunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventobusrunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
