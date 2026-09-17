import { Component } from '@angular/core';
// import { CommonModule  } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})

export class NavbarComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  eventsOpen = false;

  sampleEvents = [
    { name: 'AI Innovation Summit 2026', date: 'Jul 15' },
    { name: 'Cloud & Data Meetup', date: 'Aug 02' },
    { name: 'iGentic Product Launch', date: 'Aug 20' },
    { name: 'Developer Hackathon', date: 'Sep 10' }
  ];

  toggleEvents(): void {
    this.eventsOpen = !this.eventsOpen;
  }

  closeEvents(): void {
    this.eventsOpen = false;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}