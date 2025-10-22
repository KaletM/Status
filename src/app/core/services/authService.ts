import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import User from '../entities/User';
import { baseUrl, isTesting } from './ServiceSettings';
import usersTestdata from '../testdata/Users';
import { HttpClient } from '@angular/common/http';
import { ErrorHandlerService } from '../error-handler';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = isTesting ? `${baseUrl}test/users` : `${baseUrl}users`;

  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) {}

  login(email: string, password: string): Observable<User> {
    if (isTesting) {
      console.log('Logging in in test mode:', email);
      const user = usersTestdata.find((item) => item.email === email && item.password === password);
      return new Observable<User>((subscriber) => {
        if (user) {
          subscriber.next(user);
        } else {
          subscriber.error('Invalid credentials');
        }
        subscriber.complete();
      });
    }

    return this.http.post<any>(`${this.apiUrl}/login`, { email, password });
  }
}
