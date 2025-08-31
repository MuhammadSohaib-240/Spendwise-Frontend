import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiUrls } from '../../../core/constants/ApiUrls';
import { RegisterRequestDto, RegisterResponseDto } from '../models/register.dto';

@Injectable({
  providedIn: 'root',
})
export class RegisterApi {
  private readonly baseUrl = ApiUrls.authUrl;

  constructor(private http: HttpClient) {}

  register(request: RegisterRequestDto): Observable<RegisterResponseDto> {
    return this.http.post<RegisterResponseDto>(`${this.baseUrl}/register`, request);
  }
}
