import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RivalsComponent } from './rivals.component';

describe('RivalsComponent', () => {
  let component: RivalsComponent;
  let fixture: ComponentFixture<RivalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RivalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RivalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
