import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditUsuarioRolComponent } from './add-edit-usuario-rol.component';

describe('AddEditUsuarioRolComponent', () => {
  let component: AddEditUsuarioRolComponent;
  let fixture: ComponentFixture<AddEditUsuarioRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditUsuarioRolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditUsuarioRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
