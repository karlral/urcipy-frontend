import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubpuntajeComponent } from './clubpuntaje.component';

describe('ClubpuntajeComponent', () => {
  let component: ClubpuntajeComponent;
  let fixture: ComponentFixture<ClubpuntajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubpuntajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubpuntajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
