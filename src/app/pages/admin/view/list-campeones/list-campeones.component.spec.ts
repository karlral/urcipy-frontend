import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCampeonesComponent } from './list-campeones.component';

describe('ListCampeonesComponent', () => {
  let component: ListCampeonesComponent;
  let fixture: ComponentFixture<ListCampeonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCampeonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCampeonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
