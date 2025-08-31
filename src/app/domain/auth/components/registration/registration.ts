import { Component } from '@angular/core';
import { CustomButton } from '../../../../shared/components/custom-button/custom-button';
import { TextField } from '../../../../shared/components/text-field/text-field';
import { AuthLayout } from '../auth-layout/auth-layout';
import { RegisterService } from '../../services/register.service';
import { RegisterRequestDto } from '../../models/register.dto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  imports: [CustomButton, TextField, AuthLayout, FormsModule],
  templateUrl: './registration.html',
  styleUrl: './registration.scss',
})
export class Registration {
  name: string = '';
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  loading: boolean = false;

  constructor(private registerService: RegisterService) {}

  onRegister() {
  this.loading = true;

  this.registerService
    .register(this.name, this.username, this.email, this.password, this.confirmPassword)
    .subscribe({
      next: () => {
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
}

}
