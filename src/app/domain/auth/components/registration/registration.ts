import { Component } from '@angular/core';
import { CustomButton } from '../../../../shared/components/custom-button/custom-button';
import { TextField } from '../../../../shared/components/text-field/text-field';
import { AuthLayout } from '../auth-layout/auth-layout';

@Component({
  selector: 'app-registration',
  imports: [CustomButton, TextField, AuthLayout],
  templateUrl: './registration.html',
  styleUrl: './registration.scss',
})
export class Registration {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  loading: boolean = false;

  onRegister() {
    this.loading = true;

    // Simulate API call
    setTimeout(() => {
      this.loading = false;
      console.log(
        'Registration attempted with',
        this.name,
        this.email,
        this.password,
        this.confirmPassword
      );
    }, 2000);
  }
}
