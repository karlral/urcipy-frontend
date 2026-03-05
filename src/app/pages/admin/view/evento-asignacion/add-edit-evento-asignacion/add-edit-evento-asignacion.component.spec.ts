import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEventoAsignacionComponent } from './add-edit-evento-asignacion.component';

describe('AddEditEventoAsignacionComponent', () => {
  let component: AddEditEventoAsignacionComponent;
  let fixture: ComponentFixture<AddEditEventoAsignacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditEventoAsignacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditEventoAsignacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
