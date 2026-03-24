import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAsignaComponent } from './add-asigna.component';

describe('AddAsignaComponent', () => {
  let component: AddAsignaComponent;
  let fixture: ComponentFixture<AddAsignaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAsignaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAsignaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
