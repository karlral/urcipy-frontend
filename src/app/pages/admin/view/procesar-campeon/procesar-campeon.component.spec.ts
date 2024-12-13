import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesarCampeonComponent } from './procesar-campeon.component';

describe('ProcesarCampeonComponent', () => {
  let component: ProcesarCampeonComponent;
  let fixture: ComponentFixture<ProcesarCampeonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcesarCampeonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcesarCampeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
