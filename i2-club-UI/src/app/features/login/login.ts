import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {

  firstName = '';
  lastName = '';
  email = '';
  password = '';
  error = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  login(): void {

    // Basic validation
    if (
      !this.firstName.trim() ||
      !this.lastName.trim() ||
      !this.email.trim() ||
      !this.password.trim()
    ) {
      this.error = 'Please enter all fields.';
      return;
    }

    const success = this.authService.login(
      this.firstName,
      this.lastName,
      this.email,
      this.password
    );

    if (success) {
      this.router.navigate(['/home']);
    } else {
      this.error = 'Invalid Credentials';
    }
  }
}