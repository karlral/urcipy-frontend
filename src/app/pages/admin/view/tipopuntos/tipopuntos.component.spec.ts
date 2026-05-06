import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipopuntosComponent } from './tipopuntos.component';

describe('TipopuntosComponent', () => {
  let component: TipopuntosComponent;
  let fixture: ComponentFixture<TipopuntosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipopuntosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipopuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
