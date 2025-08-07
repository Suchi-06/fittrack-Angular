import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  userId: string = '';
  userName: string = '';
  activeSlideIndex = 0;

  slides = [
    { image: '/img2.jpg', title: 'Stay Active', message: 'Regular physical activity keeps you healthy and strong! Track your activities and share it to friends' },
    { image: '/home2.jpg', title: 'Eat a healthy and balanced', message: 'A diet is key to a healthy lifestyle. Track your calories to keep them in check' },
    { image: '/home3.jpg', title: 'Track Your Progress', message: 'Monitoring your progress helps you stay motivated!' },
    { image: '/home6.PNG', title: 'Community Engagement', message: 'Connect with people who has similar set of goals and collaborate with them.' },
    { image: '/home4.jpg', title: 'Get Enough Sleep', message: 'Quality sleep is crucial for recovery and overall well-being.' }
  ]; 

  ngOnInit() {
    this.userId = localStorage.getItem('userId') || 'N/A';
    this.userName = localStorage.getItem('userName') || 'Guest';
    setInterval(() => {
      this.activeSlideIndex = (this.activeSlideIndex + 1) % this.slides.length;
    }, 3000); // Change text every 3 seconds
  }
}
