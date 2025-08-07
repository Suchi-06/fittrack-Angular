import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-activity-list-byid',
  templateUrl: './user-activity-list-byid.component.html',
  styleUrls: ['./user-activity-list-byid.component.css']
})
export class UserActivityListByIdComponent {
  userId: number = Number(localStorage.getItem('userId')); 
  activities: any[] = [];
  showTable: boolean = false;

  constructor(
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  fetchActivities() {
    if (!this.userId) {
      this.toastr.error('User ID not found!', 'Error');
      return;
    }

    this.userService.getUserActivitiesById(this.userId).subscribe({
      next: (data) => {
        this.activities = data;
        this.showTable = this.activities.length > 0;
        if (this.activities.length === 0) {
          this.toastr.info('No activities found.', 'Info');
        }
      },
      error: () => {
        this.toastr.error('Failed to fetch activities', 'Error');
      }
    });
  }
}
