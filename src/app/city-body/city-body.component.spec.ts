import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityBodyComponent } from './city-body.component';

describe('CityBodyComponent', () => {
  let component: CityBodyComponent;
  let fixture: ComponentFixture<CityBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
