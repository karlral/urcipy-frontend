import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditRemeraComponent } from './add-edit-remera.component';

describe('AddEditRemeraComponent', () => {
  let component: AddEditRemeraComponent;
  let fixture: ComponentFixture<AddEditRemeraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditRemeraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditRemeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
