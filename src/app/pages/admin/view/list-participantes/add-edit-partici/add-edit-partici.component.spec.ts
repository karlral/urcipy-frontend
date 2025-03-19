import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditParticiComponent } from './add-edit-partici.component';

describe('AddEditParticiComponent', () => {
  let component: AddEditParticiComponent;
  let fixture: ComponentFixture<AddEditParticiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditParticiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditParticiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
