import { Injectable } from '@angular/core';
import { LoginApi } from '../api/login.api';
import { AuthService } from '../../../core/services/auth.service';
import { ToastService } from '../../../shared/components/toast/toast.service';
import { LoginRequestDto, LoginResponseDto } from '../models/login.dto';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private loginApi: LoginApi,
    private authService: AuthService,
    private toast: ToastService
  ) {}

  login(request: LoginRequestDto): Observable<LoginResponseDto> {
    if (!request.email?.trim() || !request.password?.trim()) {
      const validationError = 'Email and password cannot be empty.';
      this.toast.error(validationError);
      return throwError(() => new Error(validationError));
    }
    return this.loginApi.login(request).pipe(
      tap((res) => {
        this.authService.login(res.accessToken);
        this.toast.success('Login successful!');
      }),
      catchError((err) => {
        this.toast.error(err?.error?.message || 'Login failed!');
        return throwError(() => err);
      })
    );
  }
}
