import { Routes } from '@angular/router';

import { LoginComponent } from './features/login/login';
import { HomeComponent } from './features/home/home';
import { AboutComponent } from './features/about/about';
import { PlatformComponent } from './features/platform/platform';
import { EventsComponent } from './features/events/events';
import { LinksComponent } from './features/links/links';
import { ContactComponent } from './features/contact/contact';

import { authGuard } from './core/guards/auth-guard';
import { MainLayoutComponent } from './layouts/main-layout/main-layout';

export const routes: Routes = [

  // Open application directly on Home
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  // Login page should be accessible without authentication
  {
    path: 'login',
    component: LoginComponent
  },

  // Main application layout
  {
    path: '',
    component: MainLayoutComponent,
    children: [

      // Home is PUBLIC
      {
        path: 'home',
        component: HomeComponent
      },

      // Other pages require login
      {
        path: 'about',
        component: AboutComponent,
        canActivate: [authGuard]
      },
      {
        path: 'platform',
        component: PlatformComponent,
        canActivate: [authGuard]
      },
      {
        path: 'events',
        component: EventsComponent,
        canActivate: [authGuard]
      },
      {
        path: 'links',
        component: LinksComponent,
        canActivate: [authGuard]
      },
      {
        path: 'contact',
        component: ContactComponent,
        canActivate: [authGuard]
      }
    ]
  },

  // Unknown route → Home
  {
    path: '**',
    redirectTo: 'home'
  }
];