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
import { AiAgents } from './features/ai-agents/ai-agents';

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
      },
      {
        path: 'platform',
        component: PlatformComponent,
      },
      {
        path: 'events',
        component: EventsComponent,
      },
      {
        path: 'ai-agents',
        component: AiAgents,
      },
      {
        path: 'links',
        component: LinksComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      }
    ]
  },

  // Unknown route → Home
  {
    path: '**',
    redirectTo: 'home'
  }
];