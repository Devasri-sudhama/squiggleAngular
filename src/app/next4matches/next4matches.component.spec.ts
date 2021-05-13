import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Next4matchesComponent } from './next4matches.component';

describe('Next4matchesComponent', () => {
  let component: Next4matchesComponent;
  let fixture: ComponentFixture<Next4matchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Next4matchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Next4matchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
