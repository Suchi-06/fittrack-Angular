import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css']
})
export class AddMealComponent implements OnInit {
  addMealForm!: FormGroup;
  successMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.addMealForm = this.fb.group({
      userId: [{ value: Number(localStorage.getItem('userId')), disabled: true }],
      mealDate: [new Date().toISOString().substring(0, 10), Validators.required],
      mealTime: ['', Validators.required],
      caloriesConsumed: ['', Validators.required]
    });
  }

  addMeal(): void {
    if (this.addMealForm.invalid) {
      this.toastr.error('Please fill all the fields correctly', 'Error');
      return;
    }
  
    const formData = this.addMealForm.getRawValue();
  
    this.userService.addMeal(formData).subscribe(
      () => {
        this.successMessage = 'Meal added successfully!';
        this.toastr.success('Meal added successfully!', 'Success');
  
        this.addMealForm.reset();
        this.addMealForm.patchValue({
          userId: Number(localStorage.getItem('userId')),
          mealDate: new Date().toISOString().split('T')[0],
        });
  
        setTimeout(() => (this.successMessage = ''), 3000); // Clear after 3 seconds
      },
      () => {
        this.toastr.error('Failed to add meal', 'Error');
      }
    );
  }
  
}
