import { Injectable } from '@angular/core';
import { environment } from '../../../environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ): boolean {

    if (
      email === environment.auth.email &&
      password === environment.auth.password
    ) {

      localStorage.setItem('isLoggedIn', 'true');

      localStorage.setItem(
        'firstName',
        firstName.trim()
      );

      localStorage.setItem(
        'lastName',
        lastName.trim()
      );

      localStorage.setItem(
        'userEmail',
        email
      );

      return true;
    }

    return false;
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('userEmail');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  getFirstName(): string {
    return localStorage.getItem('firstName') || '';
  }

  getLastName(): string {
    return localStorage.getItem('lastName') || '';
  }

  getUserEmail(): string {
    return localStorage.getItem('userEmail') || '';
  }
}