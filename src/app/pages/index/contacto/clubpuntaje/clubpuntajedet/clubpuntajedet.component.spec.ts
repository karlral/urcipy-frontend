import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubpuntajedetComponent } from './clubpuntajedet.component';

describe('ClubpuntajedetComponent', () => {
  let component: ClubpuntajedetComponent;
  let fixture: ComponentFixture<ClubpuntajedetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubpuntajedetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubpuntajedetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
