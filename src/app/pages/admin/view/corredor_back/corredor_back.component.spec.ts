import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Corredor_backComponent } from './corredor_back.component';

describe('Corredor_backComponent', () => {
  let component: Corredor_backComponent;
  let fixture: ComponentFixture<Corredor_backComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Corredor_backComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Corredor_backComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
