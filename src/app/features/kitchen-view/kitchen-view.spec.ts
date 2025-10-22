import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenView } from './kitchen-view';

describe('KitchenView', () => {
  let component: KitchenView;
  let fixture: ComponentFixture<KitchenView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KitchenView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitchenView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
