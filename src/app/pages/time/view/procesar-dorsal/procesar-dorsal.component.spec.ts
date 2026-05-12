import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesarDorsalComponent } from './procesar-dorsal.component';

describe('ProcesarDorsalComponent', () => {
  let component: ProcesarDorsalComponent;
  let fixture: ComponentFixture<ProcesarDorsalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcesarDorsalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcesarDorsalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
