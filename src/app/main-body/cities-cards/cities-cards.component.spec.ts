import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesCardsComponent } from './cities-cards.component';

describe('CitiesCardsComponent', () => {
  let component: CitiesCardsComponent;
  let fixture: ComponentFixture<CitiesCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitiesCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
