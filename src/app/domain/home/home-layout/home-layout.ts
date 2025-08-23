import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './home-layout.html',
  styleUrls: ['./home-layout.scss'],
})
export class HomeLayout {
  logoPath: string = '/assets/images/logo.png';
  // Example: track which page is active
  protected readonly activePage = signal('dashboard');

  // Optional: navigation items
  navItems = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Profile', path: '/profile' },
    { label: 'Settings', path: '/settings' },
  ];

  constructor() {}
}
