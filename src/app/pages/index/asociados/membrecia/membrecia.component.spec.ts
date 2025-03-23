import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembreciaComponent } from './membrecia.component';

describe('MembreciaComponent', () => {
  let component: MembreciaComponent;
  let fixture: ComponentFixture<MembreciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembreciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembreciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
