import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsofallgamesComponent } from './resultsofallgames.component';

describe('ResultsofallgamesComponent', () => {
  let component: ResultsofallgamesComponent;
  let fixture: ComponentFixture<ResultsofallgamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsofallgamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsofallgamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
