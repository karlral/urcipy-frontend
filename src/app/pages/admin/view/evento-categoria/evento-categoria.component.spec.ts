import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoCategoriaComponent } from './evento-categoria.component';

describe('EventoCategoriaComponent', () => {
  let component: EventoCategoriaComponent;
  let fixture: ComponentFixture<EventoCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventoCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventoCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
