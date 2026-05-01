import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditParticipanteComponent } from './add-edit-participante.component';

describe('AddEditParticipanteComponent', () => {
  let component: AddEditParticipanteComponent;
  let fixture: ComponentFixture<AddEditParticipanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditParticipanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditParticipanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
