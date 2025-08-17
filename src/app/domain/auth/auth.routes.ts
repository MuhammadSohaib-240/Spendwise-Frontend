import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Registration } from './components/registration/registration';

export const authRoutes: Routes = [
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'register',
    component: Registration,
  },
];
