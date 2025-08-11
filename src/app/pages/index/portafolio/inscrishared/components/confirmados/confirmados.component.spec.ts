import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmadosComponent } from './confirmados.component';

describe('ConfirmadosComponent', () => {
  let component: ConfirmadosComponent;
  let fixture: ComponentFixture<ConfirmadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
