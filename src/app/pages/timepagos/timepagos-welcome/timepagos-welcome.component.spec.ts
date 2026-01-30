import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimepagosWelcomeComponent } from './timepagos-welcome.component';

describe('TimepagosWelcomeComponent', () => {
  let component: TimepagosWelcomeComponent;
  let fixture: ComponentFixture<TimepagosWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimepagosWelcomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimepagosWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
