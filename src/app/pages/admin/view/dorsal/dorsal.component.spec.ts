import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DorsalComponent } from './dorsal.component';

describe('DorsalComponent', () => {
  let component: DorsalComponent;
  let fixture: ComponentFixture<DorsalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DorsalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DorsalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
