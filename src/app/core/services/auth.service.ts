import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_KEY = 'jwt_token';

  constructor() {}

  // Simulate login
  login(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    return !!this.getToken(); // returns true if token exists
  }
}
