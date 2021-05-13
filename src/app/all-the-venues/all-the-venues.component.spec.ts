import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTheVenuesComponent } from './all-the-venues.component';

describe('AllTheVenuesComponent', () => {
  let component: AllTheVenuesComponent;
  let fixture: ComponentFixture<AllTheVenuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTheVenuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTheVenuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
