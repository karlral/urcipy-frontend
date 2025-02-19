import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasinfoComponent } from './masinfo.component';

describe('MasinfoComponent', () => {
  let component: MasinfoComponent;
  let fixture: ComponentFixture<MasinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
