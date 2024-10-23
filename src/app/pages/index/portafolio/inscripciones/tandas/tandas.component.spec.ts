import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TandasComponent } from './tandas.component';

describe('TandasComponent', () => {
  let component: TandasComponent;
  let fixture: ComponentFixture<TandasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TandasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TandasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
