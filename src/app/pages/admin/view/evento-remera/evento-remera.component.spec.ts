import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoRemeraComponent } from './evento-remera.component';

describe('EventoRemeraComponent', () => {
  let component: EventoRemeraComponent;
  let fixture: ComponentFixture<EventoRemeraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventoRemeraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventoRemeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
