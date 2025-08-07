import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userId: string | null = '';
  userName: string | null = '';

  ngOnInit() {
    if (typeof window !== 'undefined') { // Ensure it's running in the browser
      this.userId = localStorage.getItem('userId');
      this.userName = localStorage.getItem('userName');
    }
  }
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('token'); // Clear login session
    this.router.navigate(['/login']); // Redirect to login page
  }
}
