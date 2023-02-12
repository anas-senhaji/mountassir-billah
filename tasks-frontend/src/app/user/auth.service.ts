import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/environment';

const loginUrl = `${API_URL}/login`;
const registerUrl = `${API_URL}/register`;
const logoutUrl = `${API_URL}/logout`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(payload: any) {
    return this.http.post(loginUrl, {
      email: payload.email,
      password: payload.password
    });
  }

  logout(token: string) {
    return this.http.post(logoutUrl, {token});
  }

  register(payload: any) {
    return this.http.post(registerUrl, {
      name: payload.name,
      email: payload.email,
      password: payload.password
    });
  }
}
