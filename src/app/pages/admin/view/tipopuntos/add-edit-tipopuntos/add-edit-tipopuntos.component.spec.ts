import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTipopuntosComponent } from './add-edit-tipopuntos.component';

describe('AddEditTipopuntosComponent', () => {
  let component: AddEditTipopuntosComponent;
  let fixture: ComponentFixture<AddEditTipopuntosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditTipopuntosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditTipopuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
