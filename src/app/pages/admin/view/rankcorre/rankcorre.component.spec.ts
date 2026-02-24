import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankcorreComponent } from './rankcorre.component';

describe('RankcorreComponent', () => {
  let component: RankcorreComponent;
  let fixture: ComponentFixture<RankcorreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankcorreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankcorreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
