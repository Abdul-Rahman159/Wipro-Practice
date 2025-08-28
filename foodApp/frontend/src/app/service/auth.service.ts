import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, tap, throwError, Observable } from 'rxjs';
import { AuthResponse } from '../dto/auth/AuthResponse';
import { environment } from '../../environments/enviroment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthEventService } from './auth-event.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = environment.baseUrl + '/auth';
  private tokenKey = 'auth_token';
  private jwtHelper = new JwtHelperService();

  private loggedIn = new BehaviorSubject<boolean>(this.isLoggedIn());
  isLoggedIn$ = this.loggedIn.asObservable();

  private currentUser = new BehaviorSubject<string | null>(this.getUsernameFromToken());
  currentUser$ = this.currentUser.asObservable();

  private role = new BehaviorSubject<string | null>(this.getRoleFromToken());
  role$ = this.role.asObservable();

  constructor(private http: HttpClient, private authEventService: AuthEventService) {
    this.authEventService.tokenUpdate$.subscribe((token: string) => {
      this.setToken(token);
      console.log('Token updated ' + token);
    });
  }

  login(username: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.authUrl}/login`, { username, password })
      .pipe(
        tap(response => {
          if (response.token) {
            this.setToken(response.token);
          }
        }),
        catchError(this.handleError)
      );
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.authUrl}/register`, {
      username,
      email,
      password
    }).pipe(
      catchError(this.handleError)
    );
  }

  private setToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
    this.currentUser.next(this.getUsernameFromToken());
    this.role.next(this.getRoleFromToken());
    this.loggedIn.next(true);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    return token ? !this.jwtHelper.isTokenExpired(token) : false;
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.loggedIn.next(false);
    this.currentUser.next(null);
    this.role.next(null);
  }

  getUsernameFromToken(): string | null {
    const token = this.getToken();
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return this.jwtHelper.decodeToken(token).sub;   // ✅ assumes backend sets "sub" claim as username
    }
    return null;
  }

  getRoleFromToken(): string | null {
    const token = this.getToken();
    if (token) {
      try {
        const decodedToken = this.jwtHelper.decodeToken(token);
        if (decodedToken.roles && decodedToken.roles.length > 0) {
          return decodedToken.roles[0].authority;
        }
      } catch {
        return null;
      }
    }
    return null;
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Something went wrong!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client error: ${error.error.message}`;
    } else if (error.error?.message) {
      errorMessage = error.error.message;
    }
    return throwError(() => new Error(errorMessage));
  }
}
