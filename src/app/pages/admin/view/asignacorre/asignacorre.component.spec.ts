import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacorreComponent } from './asignacorre.component';

describe('AsignacorreComponent', () => {
  let component: AsignacorreComponent;
  let fixture: ComponentFixture<AsignacorreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignacorreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignacorreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
