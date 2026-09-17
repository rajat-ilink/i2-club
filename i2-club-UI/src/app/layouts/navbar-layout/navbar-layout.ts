import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar';

@Component({
  selector: 'navbar-layout',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './navbar-layout.html',
  styleUrl: './navbar-layout.scss'
})
export class NavbarLayoutComponent {}