import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCorredorComponent } from './add-edit-corredor.component';

describe('AddEditCorredorComponent', () => {
  let component: AddEditCorredorComponent;
  let fixture: ComponentFixture<AddEditCorredorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCorredorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditCorredorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
