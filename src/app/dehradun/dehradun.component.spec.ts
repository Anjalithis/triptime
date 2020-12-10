import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DehradunComponent } from './dehradun.component';

describe('DehradunComponent', () => {
  let component: DehradunComponent;
  let fixture: ComponentFixture<DehradunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DehradunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DehradunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
