import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrocorredorninoComponent } from './registrocorredornino.component';

describe('RegistrocorredorninoComponent', () => {
  let component: RegistrocorredorninoComponent;
  let fixture: ComponentFixture<RegistrocorredorninoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrocorredorninoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrocorredorninoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
