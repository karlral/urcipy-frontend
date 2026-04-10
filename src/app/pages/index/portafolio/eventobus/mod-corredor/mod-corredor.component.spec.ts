import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModCorredorComponent } from './mod-corredor.component';

describe('ModCorredorComponent', () => {
  let component: ModCorredorComponent;
  let fixture: ComponentFixture<ModCorredorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModCorredorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModCorredorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
