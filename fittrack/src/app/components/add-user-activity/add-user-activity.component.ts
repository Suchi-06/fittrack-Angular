import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-user-activity',
  templateUrl: './add-user-activity.component.html',
  styleUrls: ['./add-user-activity.component.css']
})
export class AddUserActivityComponent implements OnInit {
  addActivityForm!: FormGroup;
  activityTypes: any[] = [];
  addSuccess = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.addActivityForm = this.fb.group({
      userId: [{ value: Number(localStorage.getItem('userId')), disabled: true }],
      activityTypeId: ['', Validators.required],
      activityDate: [new Date().toISOString().split('T')[0], Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      caloriesBurned: ['', Validators.required],
    });

    this.getActivityTypes();
  }

  getActivityTypes() {
    this.userService.getAllActivitiesList().subscribe(
      (data: any) => {
        this.activityTypes = data;
      },
      (error) => {
        this.toastr.error('Failed to load activity types', 'Error');
      }
    );
  }

  addActivity() {
    if (this.addActivityForm.invalid) {
      this.toastr.error('Please fill all the fields correctly', 'Error');
      return;
    }

    const formData = this.addActivityForm.getRawValue();

    this.userService.addUserActivity(formData).subscribe(
      () => {
        this.addSuccess = true;
        this.toastr.success('Activity added successfully!', 'Success');
        this.addActivityForm.reset();
        this.addActivityForm.patchValue({
          userId: Number(localStorage.getItem('userId')),
          activityDate: new Date().toISOString().split('T')[0],
        });
      },
      () => {
        this.toastr.error('Failed to add activity', 'Error');
      }
    );
  }
}
