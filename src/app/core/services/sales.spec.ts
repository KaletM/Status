import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ErrorHandlerService } from '../error-handler';
import { baseUrl } from './ServiceSettings';
import { isTesting } from './ServiceSettings';
import salesTestdata from './salesService';
import Sale from '../entities/Sale';
import Details from '../entities/Details';

@Injectable({
  providedIn: 'root',
})
export class SalesService {
  private apiUrl = isTesting ? `${baseUrl}test/sales` : `${baseUrl}sales`;

  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) {}

  getSales(): Observable<Sale[]> {
    if (isTesting) {
      console.log('Fetching sales in test mode');
      return new Observable<Sale[]>((subscriber) => {
        subscriber.next(salesTestdata);
        subscriber.complete();
      });
    }

    return this.http.get<Sale[]>(`${this.apiUrl}`).pipe(
      catchError((error) => {
        this.errorHandler.handleError(error);
        throw throwError(() => error);
      })
    );
  }

  getSale(id: string): Observable<Sale> {
    if (isTesting) {
      console.log('Fetching sale in test mode');
      const sale = salesTestdata.find((s) => s.id === id);
      return new Observable<Sale>((subscriber) => {
        if (sale) {
          subscriber.next(sale);
          subscriber.complete();
        } else {
          subscriber.error('Sale not found');
        }
      });
    }

    return this.http.get<Sale>(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        this.errorHandler.handleError(error);
        throw throwError(() => error);
      })
    );
  }

  postSale(sale: Sale): Observable<Sale> {
    if (isTesting) {
      console.log('Posting sale in test mode:', sale);
      salesTestdata.push(sale);
      return new Observable<Sale>((subscriber) => {
        subscriber.next(sale);
        subscriber.complete();
      });
    }

    return this.http.post<Sale>(`${this.apiUrl}`, sale).pipe(
      catchError((error) => {
        this.errorHandler.handleError(error);
        throw throwError(() => error);
      })
    );
  }

  updateSale(id: string, sale: Sale): Observable<Sale> {
    if (isTesting) {
      salesTestdata.forEach((item, index) => {
        if (item.id === id) {
          salesTestdata[index] = sale;
        }
      });
      return new Observable<Sale>((subscriber) => {
        subscriber.next(sale);
        subscriber.complete();
      });
    }

    return this.http.put<Sale>(`${this.apiUrl}/${id}`, sale).pipe(
      catchError((error) => {
        this.errorHandler.handleError(error);
        throw throwError(() => error);
      })
    );
  }

  deleteSale(id: string): Observable<void> {
    if (isTesting) {
      console.log('Deleting sale in test mode:', id);
      const index = salesTestdata.findIndex((s) => s.id === id);
      if (index !== -1) salesTestdata.splice(index, 1);
      return new Observable<void>((subscriber) => {
        subscriber.complete();
      });
    }

    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        this.errorHandler.handleError(error);
        throw throwError(() => error);
      })
    );
  }

  calculateTotals(sale: Sale, details: Details): Sale {
    if (!sale.items) return sale;
    sale.totalAmount = sale.items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
    details.taxAmount = sale.items.reduce((sum, item) => sum + item.taxAmount, 0);
    sale.totalAmount = sale.totalAmount + details.taxAmount - (details.discount || 0);
    return sale;
  }
}
