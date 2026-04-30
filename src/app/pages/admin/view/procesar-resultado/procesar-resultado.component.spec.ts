import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesarResultadoComponent } from './procesar-resultado.component';

describe('ProcesarResultadoComponent', () => {
  let component: ProcesarResultadoComponent;
  let fixture: ComponentFixture<ProcesarResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcesarResultadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcesarResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
