import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Waiternavbar } from './waiternavbar';

describe('Waiternavbar', () => {
  let component: Waiternavbar;
  let fixture: ComponentFixture<Waiternavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Waiternavbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Waiternavbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
