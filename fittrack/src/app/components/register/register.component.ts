import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  registrationSuccess = false; // Flag to track successful registration

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
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
        ]],
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

  register() {
    if (this.registerForm.invalid) {
      alert('Please fill in all required fields correctly.');
      return;
    }

    const registerData = this.registerForm.value;

    this.userService.register(registerData).subscribe(
      (response) => {
        this.registrationSuccess = true; // Set registration success flag to true
        this.registerForm.reset(); // Reset the form after successful registration
      },
      (error) => {
        alert('Registration Failed. Please try again.');
      }
    );
  }
}