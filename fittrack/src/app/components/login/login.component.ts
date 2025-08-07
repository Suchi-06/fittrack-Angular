import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private userService: UserService, 
    private router: Router,
    private toastr: ToastrService
  ) {
    this.loginForm = this.fb.group({
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

  login() {
    if (this.loginForm.invalid) {
      this.toastr.error('Please enter a valid email and password.', 'Error');
      return;
    }

    this.userService.login(this.loginForm.value.userEmail, this.loginForm.value.userPassword).subscribe(
      response => {
        localStorage.setItem('token', response.token); 
        localStorage.setItem('userId', response.id);
        localStorage.setItem('userName', response.userName);
        this.toastr.success('Login successful!');
        this.router.navigate(['/dashboard']); 
      },
      error => {
        this.toastr.error('Invalid Email or Password', 'Error');
      }
    );
  }
}