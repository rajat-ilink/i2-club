import { Routes } from '@angular/router';

import { LoginComponent } from './features/login/login';
import { HomeComponent } from './features/home/home';
import { AboutComponent } from './features/about/about';
import { PlatformComponent } from './features/platform/platform';
import { EventsComponent } from './features/events/events';
import { LinksComponent } from './features/links/links';
import { ContactComponent } from './features/contact/contact';

import { authGuard } from './core/guards/auth-guard';
import { NavbarLayoutComponent } from './layouts/navbar-layout/navbar-layout';
import { FooterComponent } from './shared/footer/footer';
import { MainLayoutComponent } from './layouts/main-layout/main-layout';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: LoginComponent
    },

    {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
        {
        path: 'home',
        component: HomeComponent
        },
        {
        path: 'about',
        component: AboutComponent
        },
        {
        path: 'platform',
        component: PlatformComponent
        },
        {
        path: 'events',
        component: EventsComponent
        },
        {
        path: 'links',
        component: LinksComponent
        },
        {
        path: 'contact',
        component: ContactComponent
        }
    ]
    },

  {
    path: '**',
    redirectTo: 'login'
  }
];