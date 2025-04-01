import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DorsalesComponent } from './dorsales.component';

describe('DorsalesComponent', () => {
  let component: DorsalesComponent;
  let fixture: ComponentFixture<DorsalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DorsalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DorsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
