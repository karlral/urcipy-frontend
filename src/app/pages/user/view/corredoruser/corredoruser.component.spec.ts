import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorredoruserComponent } from './corredoruser.component';

describe('CorredoruserComponent', () => {
  let component: CorredoruserComponent;
  let fixture: ComponentFixture<CorredoruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorredoruserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorredoruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
