import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEventoRemeraComponent } from './add-edit-evento-remera.component';

describe('AddEditEventoRemeraComponent', () => {
  let component: AddEditEventoRemeraComponent;
  let fixture: ComponentFixture<AddEditEventoRemeraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditEventoRemeraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditEventoRemeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
