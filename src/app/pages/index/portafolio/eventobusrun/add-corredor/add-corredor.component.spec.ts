import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCorredorComponent } from './add-corredor.component';

describe('AddCorredorComponent', () => {
  let component: AddCorredorComponent;
  let fixture: ComponentFixture<AddCorredorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCorredorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCorredorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
