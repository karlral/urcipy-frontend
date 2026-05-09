import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptardioComponent } from './inscriptardio.component';

describe('InscriptardioComponent', () => {
  let component: InscriptardioComponent;
  let fixture: ComponentFixture<InscriptardioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptardioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptardioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
