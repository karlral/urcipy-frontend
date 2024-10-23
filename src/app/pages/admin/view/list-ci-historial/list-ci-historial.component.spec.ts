import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCiHistorialComponent } from './list-ci-historial.component';

describe('ListCiHistorialComponent', () => {
  let component: ListCiHistorialComponent;
  let fixture: ComponentFixture<ListCiHistorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCiHistorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCiHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
