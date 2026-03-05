import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoTipoComponent } from './evento-tipo.component';

describe('EventoTipoComponent', () => {
  let component: EventoTipoComponent;
  let fixture: ComponentFixture<EventoTipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventoTipoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventoTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
