import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTipoComponent } from './add-edit-tipo.component';

describe('AddEditTipoComponent', () => {
  let component: AddEditTipoComponent;
  let fixture: ComponentFixture<AddEditTipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditTipoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
