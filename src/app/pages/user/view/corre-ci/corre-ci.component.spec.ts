import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorreCiComponent } from './corre-ci.component';

describe('CorreCiComponent', () => {
  let component: CorreCiComponent;
  let fixture: ComponentFixture<CorreCiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorreCiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorreCiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
