import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ErrorHandlerService } from '../error-handler';
import { baseUrl } from './ServiceSettings';
import { isTesting } from './ServiceSettings';
import usersTestdata from '../testdata/Users';
import User from '../entities/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  private apiUrl = isTesting ? `${baseUrl}test/users` : `${baseUrl}users`;

  constructor(
    private http: HttpClient,
    private errorHandler: ErrorHandlerService) {  }

  getData() : Observable<User[]> {

    if (isTesting) {
      console.log('Fetching data in test mode');
      
      return new Observable<User[]>(subscriber => {
        subscriber.next(usersTestdata);
        subscriber.complete();
      });
    }

    return this.http.get<User[]>(`${this.apiUrl}/data`).pipe(
      catchError((error => {
        this.errorHandler.handleError(error);
        throw throwError(() => error);
      }))
    );
  }

  postData(data: User) : Observable<User> {

    if (isTesting) {
      console.log('Posting data in test mode:', data);
      usersTestdata.push(data);
      return new Observable<User>(subscriber => {
        subscriber.next(data);
        subscriber.complete();
      });
    }

    return this.http.post<any>(`${this.apiUrl}/data`, data);
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
}
