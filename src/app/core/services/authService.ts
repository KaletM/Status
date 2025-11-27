import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';
import User, { LoginSuccessResponse } from '../entities/User';
import { baseUrl, isTesting } from './ServiceSettings';
import usersTestdata from '../testdata/Users';
import { HttpClient } from '@angular/common/http';
import { ErrorHandlerService } from '../error-handler';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = isTesting ? `${baseUrl}test/users` : `${baseUrl}/Auth`;
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  private currentSessionToken = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) {}

  login(username: string, password: string): Observable<boolean> {
    if (isTesting) {
      console.log('Logging in in test mode:', username);
      const user = usersTestdata.find((item) => item.email === username && item.password === password);
      return of(user !== undefined);
    }

    return this.http.post<any>(`${this.apiUrl}/login`, { Username: username, Password: password }).pipe(
      map((res) => {
        if (res && res.token) {
          this.currentSessionToken.next(res.token);
          return true;
        }
        return false;
      }),
      catchError((err) => {
        this.errorHandler.handleError(err);
        console.error('Login failed:', err);
        return of(false);
      })
    );
  }

  getCurrentUser(): Observable<User | null> {
    return this.currentUserSubject.asObservable();
  }

  getCurrentSessionToken(): Observable<string | null> {
    return this.currentSessionToken.asObservable();
  }

  setCurrentUser(user: User | null): void {
    this.currentUserSubject.next(user);
  }
}
