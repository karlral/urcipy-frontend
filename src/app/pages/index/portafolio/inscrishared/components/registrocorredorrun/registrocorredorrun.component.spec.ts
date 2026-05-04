import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrocorredorrunComponent } from './registrocorredorrun.component';

describe('RegistrocorredorrunComponent', () => {
  let component: RegistrocorredorrunComponent;
  let fixture: ComponentFixture<RegistrocorredorrunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrocorredorrunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrocorredorrunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
