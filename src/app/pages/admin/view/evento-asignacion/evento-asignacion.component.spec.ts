import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoAsignacionComponent } from './evento-asignacion.component';

describe('EventoAsignacionComponent', () => {
  let component: EventoAsignacionComponent;
  let fixture: ComponentFixture<EventoAsignacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventoAsignacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventoAsignacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
