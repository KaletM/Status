import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import Sale from '../entities/Sale';

const salesTestdata: Sale[] = [
  {
    id: '1',
    date: new Date('2025-10-18'),
    totalAmount: 21.59,
    paymentMethod: 'cash',
    items: [
      { id: '1', productName: 'Classic Burger', quantity: 1, unitPrice: 12.99, taxAmount: 2.00, discount: 0, total: 12.99, icon: "https://homefoodie.com.ph/uploads/2024/CLASSIC%20BURGER.jpg" },
      { id: '2', productName: 'Fries', quantity: 1, unitPrice: 4.50, taxAmount: 0.50, discount: 0, total: 4.50, icon: "https://www.recipetineats.com/tachyon/2022/09/Crispy-Fries_8.jpg" },
      { id: '3', productName: 'Soda', quantity: 1, unitPrice: 2.50, taxAmount: 0.10, discount: 0, total: 2.50, icon: "https://icons.iconarchive.com/icons/michael/coke-pepsi/512/Coca-Cola-Can-icon.png" }
    ],
    customerId: 'cust1',
    createdAt: new Date('2025-10-18T10:00:00Z'),
    updatedAt: new Date('2025-10-18T10:00:00Z'),
  }
];

@Injectable({ providedIn: 'root' })
export class SalesService {
  getSales(): Observable<Sale[]> {
    return of(salesTestdata);
  }
}
