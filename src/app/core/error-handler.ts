import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  handleError(error: any): void {
    console.error('An error occurred:', error);
    alert('An error occurred. Please try again later.');
  }
}
