import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserActivityListBydateComponent } from './user-activity-list-bydate.component';

describe('UserActivityListBydateComponent', () => {
  let component: UserActivityListBydateComponent;
  let fixture: ComponentFixture<UserActivityListBydateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserActivityListBydateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserActivityListBydateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
