import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEventoTipoComponent } from './add-edit-evento-tipo.component';

describe('AddEditEventoTipoComponent', () => {
  let component: AddEditEventoTipoComponent;
  let fixture: ComponentFixture<AddEditEventoTipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditEventoTipoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditEventoTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
