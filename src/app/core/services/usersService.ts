import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ErrorHandlerService } from '../error-handler';
import { baseUrl } from './ServiceSettings';
import { isTesting } from './ServiceSettings';
import usersTestdata from '../testdata/Users';
import User from '../entities/User';
import { AuthService } from './authService';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = isTesting ? `${baseUrl}test/users` : `${baseUrl}/User`;

  constructor(
    private http: HttpClient,
    private errorHandler: ErrorHandlerService,
    private authService: AuthService) {  }

  getData(token: string) : Observable<User[]> {

    if (isTesting) {
      console.log('Fetching data in test mode');

      return new Observable<User[]>(subscriber => {
        subscriber.next(usersTestdata);
        subscriber.complete();
      });
    }


    const headers = { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer ' + token };

    const response = this.http.get<User[]>(`${this.apiUrl}`, { headers: headers }).pipe(
      catchError((error => {
        this.errorHandler.handleError(error);
        throw throwError(() => error);
      }))
    );

    return response;
  }

  createUser(data: User,token: string) : Observable<User> {

    if (isTesting) {
      console.log('Posting data in test mode:', data);
      usersTestdata.push(data);
      return new Observable<User>(subscriber => {
        subscriber.next(data);
        subscriber.complete();
      });
    }

    const payload = {
      "username": data.username,
      "email": data.email,
      "passwordHash": data.password,
      "restaurantId": data.restaurantId,
      "restaurantBranchId": null,
      "roleId": data.role.id
    }

    const headers = {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Bearer " + token
    }

    console.log('Creating user with payload:', payload);


    return this.http.post<any>(`${this.apiUrl}`, payload, {headers: headers});
  }

  updateData(id: string, data: User) : Observable<User> {


    if (isTesting) {
      usersTestdata.forEach((item, index) => {
        if (item.id === id) {
          usersTestdata[index] = data;
        }
      });

      return new Observable<User>(subscriber => {
        subscriber.next(data);
        subscriber.complete();
      });
    }

    return this.http.put<any>(`${this.apiUrl}/data/${id}`, data);
  }

  deleteData(id: string) : Observable<void> {

    if (isTesting) {
      console.log('Deleting data in test mode:', id);
      const index = usersTestdata.findIndex(item => item.id === id);
      if (index !== -1) {
        usersTestdata.splice(index, 1);
      }
      return new Observable<void>(subscriber => {
        subscriber.next();
        subscriber.complete();
      });
    }

    return this.http.delete<void>(`${this.apiUrl}/data/${id}`);
  }

  getCurrentUser() : Observable<User | null> {
    return this.authService.getCurrentUser();
  }

  getUserByUsername(username: string) : Observable<User | null> {
    if (isTesting) {
      console.log('Fetching user by username in test mode:', username);
      const user = usersTestdata.find(item => item.username === username) || null;
      return new Observable<User | null>(subscriber => {
        subscriber.next(user);
        subscriber.complete();
      });
    }

    console.log('Fetching user by username from API:', username);


    return this.http.get<User>(`${this.apiUrl}/by-username/${username}`);
  }

  getUserByCompanyId(restaurantId: string,token: string) : Observable<User[] | null> {
    if (isTesting) {
      console.log('Fetching users by restaurant ID in test mode:', restaurantId);
      const users = usersTestdata.filter(item => item.id === restaurantId) || null;
      return new Observable<User[] | null>(subscriber => {
        subscriber.next(users);
        subscriber.complete();
      });
    }

    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token };



    const response = this.http.get<User[]>(`${this.apiUrl}/restaurant/${restaurantId}`, { headers: headers }).pipe(
      catchError((error => {
        this.errorHandler.handleError(error);
        throw throwError(() => error);
      }))
    );

    return response;
  }
}
