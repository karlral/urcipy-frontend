import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMovimientoComponent } from './add-edit-movimiento.component';

describe('AddEditMovimientoComponent', () => {
  let component: AddEditMovimientoComponent;
  let fixture: ComponentFixture<AddEditMovimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditMovimientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditMovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
