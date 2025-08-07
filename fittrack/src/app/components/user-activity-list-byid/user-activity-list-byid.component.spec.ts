import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserActivityListByidComponent } from './user-activity-list-byid.component';

describe('UserActivityListByidComponent', () => {
  let component: UserActivityListByidComponent;
  let fixture: ComponentFixture<UserActivityListByidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserActivityListByidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserActivityListByidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
