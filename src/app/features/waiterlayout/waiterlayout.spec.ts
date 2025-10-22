import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Waiterlayout } from './waiterlayout';

describe('Waiterlayout', () => {
  let component: Waiterlayout;
  let fixture: ComponentFixture<Waiterlayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Waiterlayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Waiterlayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
