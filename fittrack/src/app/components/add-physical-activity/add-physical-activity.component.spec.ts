import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPhysicalActivityComponent } from './add-physical-activity.component';

describe('AddPhysicalActivityComponent', () => {
  let component: AddPhysicalActivityComponent;
  let fixture: ComponentFixture<AddPhysicalActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPhysicalActivityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPhysicalActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
