import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAnualHistorialComponent } from './list-anual-historial.component';

describe('ListAnualHistorialComponent', () => {
  let component: ListAnualHistorialComponent;
  let fixture: ComponentFixture<ListAnualHistorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAnualHistorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAnualHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
