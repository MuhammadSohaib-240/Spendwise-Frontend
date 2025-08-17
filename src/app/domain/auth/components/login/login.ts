import { Component } from '@angular/core';
import { CustomButton } from '../../../../shared/components/custom-button/custom-button';
import { TextField } from '../../../../shared/components/text-field/text-field';
import { AuthLayout } from '../auth-layout/auth-layout';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CustomButton, TextField, AuthLayout, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  email: string = '';
  password: string = '';
  loading: boolean = false;

  onLogin() {
    this.loading = true;

    // Simulate API call
    setTimeout(() => {
      this.loading = false;
      console.log('Login attempted with', this.email, this.password);
    }, 2000);
  }
}
