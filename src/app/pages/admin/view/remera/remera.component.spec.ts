import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemeraComponent } from './remera.component';

describe('RemeraComponent', () => {
  let component: RemeraComponent;
  let fixture: ComponentFixture<RemeraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemeraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
