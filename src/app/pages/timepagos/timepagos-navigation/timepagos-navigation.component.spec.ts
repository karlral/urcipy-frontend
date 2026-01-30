import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimepagosNavigationComponent } from './timepagos-navigation.component';

describe('TimepagosNavigationComponent', () => {
  let component: TimepagosNavigationComponent;
  let fixture: ComponentFixture<TimepagosNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimepagosNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimepagosNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
