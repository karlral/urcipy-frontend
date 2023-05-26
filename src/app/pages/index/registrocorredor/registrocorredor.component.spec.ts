import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrocorredorComponent } from './registrocorredor.component';

describe('RegistrocorredorComponent', () => {
  let component: RegistrocorredorComponent;
  let fixture: ComponentFixture<RegistrocorredorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrocorredorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrocorredorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
