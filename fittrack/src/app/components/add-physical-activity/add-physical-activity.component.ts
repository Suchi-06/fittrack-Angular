import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-physical-activity',
  templateUrl: './add-physical-activity.component.html',
  styleUrls: ['./add-physical-activity.component.css']
})
export class AddPhysicalActivityComponent {
  activityDescription: string = '';
  successMessage: string = '';

  constructor(private userService: UserService) {}

  addActivity() {
    if (this.activityDescription) {
      const activity = { description: this.activityDescription };

      this.userService.addActivity(activity).subscribe(
        () => {
          this.successMessage = 'Physical activity added successfully!';
          this.activityDescription = ''; // Clear the input
          setTimeout(() => {
            this.successMessage = '';
          }, 3000);
        },
        (error) => {
          console.error('Error adding activity:', error);
        }
      );
    }
  }
}
