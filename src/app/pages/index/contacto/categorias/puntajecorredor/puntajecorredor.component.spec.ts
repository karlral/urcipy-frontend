import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntajecorredorComponent } from './puntajecorredor.component';

describe('PuntajecorredorComponent', () => {
  let component: PuntajecorredorComponent;
  let fixture: ComponentFixture<PuntajecorredorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntajecorredorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuntajecorredorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
