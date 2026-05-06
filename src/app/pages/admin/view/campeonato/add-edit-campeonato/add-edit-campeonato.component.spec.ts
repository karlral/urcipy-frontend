import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCampeonatoComponent } from './add-edit-campeonato.component';

describe('AddEditCampeonatoComponent', () => {
  let component: AddEditCampeonatoComponent;
  let fixture: ComponentFixture<AddEditCampeonatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCampeonatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditCampeonatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
