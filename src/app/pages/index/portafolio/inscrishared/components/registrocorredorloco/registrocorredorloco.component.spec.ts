import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrocorredorlocoComponent } from './registrocorredorloco.component';

describe('RegistrocorredorlocoComponent', () => {
  let component: RegistrocorredorlocoComponent;
  let fixture: ComponentFixture<RegistrocorredorlocoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrocorredorlocoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrocorredorlocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
