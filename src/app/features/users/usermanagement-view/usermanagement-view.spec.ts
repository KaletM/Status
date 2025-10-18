import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermanagementView } from './usermanagement-view';

describe('UsermanagementView', () => {
  let component: UsermanagementView;
  let fixture: ComponentFixture<UsermanagementView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsermanagementView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsermanagementView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
