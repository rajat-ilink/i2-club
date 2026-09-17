import { Component, ElementRef, HostListener } from '@angular/core';
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
    private router: Router,
    private elementRef: ElementRef
  ) {
    this.checkLoginStatus();
  }

  eventsOpen = false;
  loginDropdownOpen = false;
  isLoggedIn = false;
  firstName = '';

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as Node;

    if (!this.elementRef.nativeElement.contains(target)) {
      this.eventsOpen = false;
      this.loginDropdownOpen = false;
    }
  }

  sampleEvents = [
    { name: 'AI Innovation Summit 2026', date: 'Jul 15' },
    { name: 'Cloud & Data Meetup', date: 'Aug 02' },
    { name: 'iGentic Product Launch', date: 'Aug 20' },
    { name: 'Developer Hackathon', date: 'Sep 10' }
  ];

  // Events dropdown
  toggleEvents(): void {
    this.eventsOpen = !this.eventsOpen;

    if (this.eventsOpen) {
      this.loginDropdownOpen = false;
    }
  }

  closeEvents(): void {
    this.eventsOpen = false;
  }


  checkLoginStatus(): void {
    this.isLoggedIn = this.authService.isLoggedIn();

    if (this.isLoggedIn) {
      this.firstName = this.authService.getFirstName();
    } else {
      this.firstName = '';
    }
  }

  toggleLoginDropdown(): void {
    this.loginDropdownOpen = !this.loginDropdownOpen;

    if (this.loginDropdownOpen) {
      this.eventsOpen = false;
    }
  }

  closeLoginDropdown(): void {
    this.loginDropdownOpen = false;
  }

  logout(): void {
    this.authService.logout();

    this.isLoggedIn = false;
    this.firstName = '';
    this.loginDropdownOpen = false;

    // Stay on Home after sign out
    this.router.navigate(['/home']);
  }
}