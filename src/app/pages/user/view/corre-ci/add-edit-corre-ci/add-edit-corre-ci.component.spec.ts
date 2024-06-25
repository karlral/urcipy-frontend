import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCorreCiComponent } from './add-edit-corre-ci.component';

describe('AddEditCorreCiComponent', () => {
  let component: AddEditCorreCiComponent;
  let fixture: ComponentFixture<AddEditCorreCiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCorreCiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditCorreCiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
