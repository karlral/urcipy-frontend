import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPuntajeComponent } from './add-edit-puntaje.component';

describe('AddEditPuntajeComponent', () => {
  let component: AddEditPuntajeComponent;
  let fixture: ComponentFixture<AddEditPuntajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPuntajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditPuntajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
