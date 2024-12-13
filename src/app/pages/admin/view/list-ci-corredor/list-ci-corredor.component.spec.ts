import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCiCorredorComponent } from './list-ci-corredor.component';

describe('ListCiCorredorComponent', () => {
  let component: ListCiCorredorComponent;
  let fixture: ComponentFixture<ListCiCorredorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCiCorredorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCiCorredorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
