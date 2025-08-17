import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
// import other pages as needed

export const homeRoutes: Routes = [
  {
    path: 'dashboard',
    component: Dashboard,
  },
  // Add more pages here
  // { path: 'profile', component: Profile },
  // { path: 'settings', component: Settings },
];
