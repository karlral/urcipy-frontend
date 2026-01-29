import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCorredoruserComponent } from './add-edit-corredoruser.component';

describe('AddEditCorredoruserComponent', () => {
  let component: AddEditCorredoruserComponent;
  let fixture: ComponentFixture<AddEditCorredoruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCorredoruserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditCorredoruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
