import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
  userId!: number;
  bmiData: any;
  
  loggedInUserId = Number(localStorage.getItem('userId'));
  errorMessage: string = '';

  constructor(private userService: UserService) {}

  fetchBmi() {
    if (this.userId !== this.loggedInUserId) {
      this.errorMessage = 'Please enter your user ID.';
      this.bmiData = null;
      return;
    }

    this.userService.getBMIByUserId(this.userId).subscribe(
      (data) => {
        this.bmiData = data;
        this.errorMessage = '';
      },
      (error) => {
        console.error('Error fetching BMI:', error);
        this.errorMessage = 'Failed to fetch BMI. Please try again.';
      }
    );
  }
}
