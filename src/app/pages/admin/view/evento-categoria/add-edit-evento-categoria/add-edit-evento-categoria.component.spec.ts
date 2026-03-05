import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEventoCategoriaComponent } from './add-edit-evento-categoria.component';

describe('AddEditEventoCategoriaComponent', () => {
  let component: AddEditEventoCategoriaComponent;
  let fixture: ComponentFixture<AddEditEventoCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditEventoCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditEventoCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
