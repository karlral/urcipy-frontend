import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEventoComponent } from './add-edit-evento.component';

describe('AddEditEventoComponent', () => {
  let component: AddEditEventoComponent;
  let fixture: ComponentFixture<AddEditEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditEventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
