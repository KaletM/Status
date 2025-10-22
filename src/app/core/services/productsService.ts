import { Injectable } from '@angular/core';
import { baseUrl, isTesting } from './ServiceSettings';
import { HttpClient } from '@angular/common/http';
import { ErrorHandlerService } from '../error-handler';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  private apiUrl = isTesting ? `${baseUrl}test/users` : `${baseUrl}users`;

  constructor(
    private http: HttpClient,
    private errorHandler: ErrorHandlerService) {  }

  getData() : Observable<Product[]> {

    if (isTesting) {
      console.log('Fetching data in test mode');
      
      return new Observable<Product[]>(subscriber => {
        subscriber.next(productsTestData);
        subscriber.complete();
      });
    }

    return this.http.get<Product[]>(`${this.apiUrl}/data`).pipe(
      catchError((error => {
        this.errorHandler.handleError(error);
        throw throwError(() => error);
      }))
    );
  }

  postData(data: Product) : Observable<Product> {

    if (isTesting) {
      console.log('Posting data in test mode:', data);
      productsTestData.push(data);
      return new Observable<Product>(subscriber => {
        subscriber.next(data);
        subscriber.complete();
      });
    }

    return this.http.post<any>(`${this.apiUrl}/data`, data);
  }

  updateData(id: string, data: Product) : Observable<Product> {


    if (isTesting) {
      productsTestData.forEach((item, index) => {
        if (item.id === id) {
          productsTestData[index] = data;
        }
      });

      return new Observable<Product>(subscriber => {
        subscriber.next(data);
        subscriber.complete();
      });
    }

    return this.http.put<any>(`${this.apiUrl}/data/${id}`, data);
  }

  deleteData(id: string) : Observable<void> {

    if (isTesting) {
      console.log('Deleting data in test mode:', id);
      const index = productsTestData.findIndex(item => item.id === id);
      if (index !== -1) {
        productsTestData.splice(index, 1);
      }
      return new Observable<void>(subscriber => {
        subscriber.next();
        subscriber.complete();
      });
    }

    return this.http.delete<void>(`${this.apiUrl}/data/${id}`);
  }


}
