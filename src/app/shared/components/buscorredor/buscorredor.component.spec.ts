import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscorredorComponent } from './buscorredor.component';

describe('BuscorredorComponent', () => {
  let component: BuscorredorComponent;
  let fixture: ComponentFixture<BuscorredorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscorredorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscorredorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
