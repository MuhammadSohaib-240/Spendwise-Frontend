import { Routes } from '@angular/router';
import { authRoutes } from './domain/auth/auth.routes';
import { HomeLayout } from './domain/home/home-layout/home-layout';
import { AuthGuard } from './core/guards/auth.guard';
import { homeRoutes } from './domain/home/home.routes';

export const routes: Routes = [
  {
    path: '',
    component: HomeLayout,
    canActivate: [AuthGuard],
    children: [...homeRoutes], // <- use homeRoutes here
  },
  ...authRoutes, // include all auth routes
  // default redirect to login
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  // wildcard redirect to handle unknown routes
  {
    path: '**',
    redirectTo: '/login',
  },
];
