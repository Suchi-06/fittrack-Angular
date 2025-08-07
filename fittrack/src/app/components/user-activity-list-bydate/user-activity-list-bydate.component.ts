import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-activity-list-bydate',
  templateUrl: './user-activity-list-bydate.component.html',
  styleUrls: ['./user-activity-list-bydate.component.css']
})
export class UserActivityListBydateComponent {

  selectedDate: string = '';
  activities: any[] = [];

  constructor(private userService: UserService) {}

  fetchActivities() {
    if (!this.selectedDate) {
      alert('Please select a date.');
      return;
    }

    this.userService.getUserActivitiesByDate(this.selectedDate)
      .subscribe({
        next: (data) => {
          this.activities = data;
        },
        error: (err) => {
          console.error('Error fetching activities:', err);
          alert('Failed to fetch activities.');
        }
      });
  }
}
