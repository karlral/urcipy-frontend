import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeWelcomeComponent } from './time-welcome.component';

describe('TimeWelcomeComponent', () => {
  let component: TimeWelcomeComponent;
  let fixture: ComponentFixture<TimeWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeWelcomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
