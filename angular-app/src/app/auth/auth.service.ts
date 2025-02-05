import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';  
import { Observable } from 'rxjs';
import { Data } from './auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiURL = 'http://127.0.0.1:8000/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  
  private authenticated = false;

  constructor(private httpClient: HttpClient, private router: Router) { }  // Inject Router


  isAuthenticated(): boolean {
    return this.authenticated;
  }

  register(data: Data): Observable<any> {
    return this.httpClient.post(`${this.apiURL}/register`, data);
  }

  login(data: Data): Observable<any> {
    this.authenticated = true;
    return this.httpClient.post(`${this.apiURL}/login`, data);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  isAdmin(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user?.role === 'admin';
  }

  logAction(action: string) {
    this.httpClient.post(`${this.apiURL}/log`, { action }).subscribe();
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
  getUser(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null; 
  }
  
  getUserName(): string | null {
    const user = this.getUser();
    return user ? user.name : null; 
  }
  
  logout() {
    if(confirm('Are you sure you want to logout?')){
      this.authenticated = false;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    }
  }

}
