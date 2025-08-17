import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequestDto, LoginResponseDto } from '../models/login.dto';

@Injectable({
  providedIn: 'root',
})
export class LoginApi {
  private readonly baseUrl = 'http://localhost:3000/api/auth'; // adjust to your backend

  constructor(private http: HttpClient) {}

  login(request: LoginRequestDto): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(`${this.baseUrl}/login`, request);
  }
}
