import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionesninoComponent } from './inscripcionesnino.component';

describe('InscripcionesninoComponent', () => {
  let component: InscripcionesninoComponent;
  let fixture: ComponentFixture<InscripcionesninoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscripcionesninoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscripcionesninoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
