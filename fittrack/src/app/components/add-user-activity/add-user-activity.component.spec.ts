import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserActivityComponent } from './add-user-activity.component';

describe('AddUserActivityComponent', () => {
  let component: AddUserActivityComponent;
  let fixture: ComponentFixture<AddUserActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddUserActivityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
