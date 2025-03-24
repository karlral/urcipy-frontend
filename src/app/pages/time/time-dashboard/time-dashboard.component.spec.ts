import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeDashboardComponent } from './time-dashboard.component';

describe('TimeDashboardComponent', () => {
  let component: TimeDashboardComponent;
  let fixture: ComponentFixture<TimeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
