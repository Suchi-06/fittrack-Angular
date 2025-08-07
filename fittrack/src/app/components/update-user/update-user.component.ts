import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  updateForm: FormGroup;
  updateSuccess = false;
  loggedInUserId = Number(localStorage.getItem('userId'));

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private toastr: ToastrService
  ) {
    this.updateForm = this.fb.group({
      id: [{ value: this.loggedInUserId, disabled: true }], // Use logged-in user ID
      userName: ['', Validators.required],
      userAge: ['', [Validators.required, Validators.min(1)]],
      genderRefId: ['', Validators.required],
      userHeight: ['', Validators.required],
      userWeight: ['', Validators.required],
      userEmail: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
        ]
      ],
      userPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{4,}$/)
        ]
      ]
    });
  }

  ngOnInit(): void {
    this.fetchUserDetails(); // Auto-fetch details on load
  }

  fetchUserDetails() {
    if (!this.loggedInUserId) {
      this.toastr.error('Please log in to update details.', 'Error');
      return;
    }

    this.userService.getUserById(this.loggedInUserId).subscribe(
      (user: any) => {
        this.updateForm.patchValue(user);
        this.toastr.success('User details fetched successfully!', 'Success');
      },
      (error) => {
        this.toastr.error('Failed to fetch user details. Please try again.', 'Error');
      }
    );
  }

  updateUser() {
    if (this.updateForm.invalid) {
      this.toastr.error('Please fill in all required fields correctly.', 'Error');
      return;
    }

    const updateData = {
      ...this.updateForm.getRawValue(),
      id: this.loggedInUserId // Ensure ID is from logged-in user
    };

    this.userService.updateUser(updateData).subscribe(
      () => {
        this.updateSuccess = true;
        this.toastr.success('User details updated successfully!', 'Success');
      },
      () => {
        this.toastr.error('Failed to update user details. Please try again.', 'Error');
      }
    );
  }
}
