import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatCorredorComponent } from './cat-corredor.component';

describe('CatCorredorComponent', () => {
  let component: CatCorredorComponent;
  let fixture: ComponentFixture<CatCorredorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatCorredorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatCorredorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
