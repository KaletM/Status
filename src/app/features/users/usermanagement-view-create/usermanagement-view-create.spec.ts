import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermanagementViewCreate } from './usermanagement-view-create';

describe('UsermanagementViewCreate', () => {
  let component: UsermanagementViewCreate;
  let fixture: ComponentFixture<UsermanagementViewCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsermanagementViewCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsermanagementViewCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
