import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimepagosDashboardComponent } from './timepagos-dashboard.component';

describe('TimepagosDashboardComponent', () => {
  let component: TimepagosDashboardComponent;
  let fixture: ComponentFixture<TimepagosDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimepagosDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimepagosDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
