import { Component } from '@angular/core';
import { CustomButton } from '../../../../shared/components/custom-button/custom-button';
import { TextField } from '../../../../shared/components/text-field/text-field';
import { AuthLayout } from '../auth-layout/auth-layout';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { LoginRequestDto } from '../../models/login.dto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CustomButton, TextField, AuthLayout, RouterModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  email: string = '';
  password: string = '';
  loading: boolean = false;

  constructor(private loginService: LoginService, private router: Router) {}

  onLogin() {
    const request: LoginRequestDto = {
      email: this.email,
      password: this.password,
    };

    this.loading = true;

    this.loginService.login(request).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        this.loading = false;
      },
    });
  }
}
