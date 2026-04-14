import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionesrunComponent } from './inscripcionesrun.component';

describe('InscripcionesrunComponent', () => {
  let component: InscripcionesrunComponent;
  let fixture: ComponentFixture<InscripcionesrunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscripcionesrunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscripcionesrunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
