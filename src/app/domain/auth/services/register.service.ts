import { Injectable } from '@angular/core';
import { RegisterApi } from '../api/register.api';
import { ToastService } from '../../../shared/components/toast/toast.service';
import { RegisterRequestDto, RegisterResponseDto } from '../models/register.dto';
import { catchError, Observable, throwError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(
    private registerApi: RegisterApi,
    private toast: ToastService
  ) {}

  register(
    name: string,
    username: string,
    email: string,
    password: string,
    confirmPassword: string
  ): Observable<RegisterResponseDto> {
    // --- Field validations ---
    if (!/^[a-zA-Z\s]{2,50}$/.test(name)) {
      const error = 'Name must be 2-50 letters long and contain only letters and spaces.';
      this.toast.error(error);
      return throwError(() => new Error(error));
    }

    if (!/^[a-zA-Z0-9_]{3,20}$/.test(username)) {
      const error = 'Username must be 3-20 characters, letters, numbers, or underscores only.';
      this.toast.error(error);
      return throwError(() => new Error(error));
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      const error = 'Email format is invalid.';
      this.toast.error(error);
      return throwError(() => new Error(error));
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password)) {
      const error = 'Password must be at least 8 characters with uppercase, lowercase, number, and special character.';
      this.toast.error(error);
      return throwError(() => new Error(error));
    }

    if (password !== confirmPassword) {
      const error = 'Password and Confirm Password do not match.';
      this.toast.error(error);
      return throwError(() => new Error(error));
    }

    // --- Construct DTO for API ---
    const request: RegisterRequestDto = { name, username, email, password };

    // --- Call API ---
    return this.registerApi.register(request).pipe(
      tap((res) => {
        this.toast.success(res.message || 'Registration successful!');
      }),
      catchError((err) => {
        this.toast.error(err?.error?.message || 'Registration failed!');
        return throwError(() => err);
      })
    );
  }
}
