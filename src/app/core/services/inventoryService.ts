import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, catchError, throwError } from 'rxjs';
import { ErrorHandlerService } from '../error-handler';
import { baseUrl, isTesting } from './ServiceSettings';

import Product from '../entities/Product';
import InventoryMovement from '../entities/InventoryMovement';
import Supplier from '../entities/Supplier';
import PurchaseOrder from '../entities/PurchaseOrder';
import PurchaseOrderItem from '../entities/PurchaseOrderItem';

// <<< importa tus testdata >>>
import productsTestdata from '../testdata/Products';
import inventoryMovementsTestdata from '../testdata/InventoryMovements';
import suppliersTestdata from '../testdata/Suppliers';
import purchaseOrdersTestdata from '../testdata/PurchaseOrders';

@Injectable({ providedIn: 'root' })
export class InventoryService {
  private apiProducts  = `${baseUrl}products`;
  private apiMovements = `${baseUrl}inventory-movements`;
  private apiSuppliers = `${baseUrl}suppliers`;
  private apiOrders    = `${baseUrl}purchase-orders`;

  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) {}

  getProducts(): Observable<Product[]> {
    if (isTesting) return of(productsTestdata);
    return this.http.get<Product[]>(`${this.apiProducts}/data`).pipe(
      catchError(err => { this.errorHandler.handleError(err); return throwError(() => err); })
    );
  }

  getLowStock(): Observable<Product[]> {
    if (isTesting) return of(productsTestdata.filter(p => p.stockActual <= p.stockMinimo));
    return this.http.get<Product[]>(`${this.apiProducts}/low-stock`).pipe(
      catchError(err => { this.errorHandler.handleError(err); return throwError(() => err); })
    );
  }

  createMovement(data: InventoryMovement): Observable<InventoryMovement> {
    if (isTesting) {
      // simula persistencia
      (inventoryMovementsTestdata as InventoryMovement[]).push(data);
      // ajusta stock en memoria
      const prod = productsTestdata.find(p => p.id === data.productoId);
      if (prod) prod.stockActual += data.tipo === 'out' ? -Math.abs(data.cantidad) : Math.abs(data.cantidad);
      return of(data);
    }
    return this.http.post<InventoryMovement>(`${this.apiMovements}/data`, data).pipe(
      catchError(err => { this.errorHandler.handleError(err); return throwError(() => err); })
    );
  }

  getMovements(productId?: string): Observable<InventoryMovement[]> {
    if (isTesting) return of(productId ? inventoryMovementsTestdata.filter(m => m.productoId === productId) : inventoryMovementsTestdata);
    const url = productId ? `${this.apiMovements}/data?productId=${productId}` : `${this.apiMovements}/data`;
    return this.http.get<InventoryMovement[]>(url).pipe(
      catchError(err => { this.errorHandler.handleError(err); return throwError(() => err); })
    );
  }

  getSuppliers(): Observable<Supplier[]> {
    if (isTesting) return of(suppliersTestdata);
    return this.http.get<Supplier[]>(`${this.apiSuppliers}/data`).pipe(
      catchError(err => { this.errorHandler.handleError(err); return throwError(() => err); })
    );
  }

  listOrders(status?: string): Observable<PurchaseOrder[]> {
    if (isTesting) return of(status ? purchaseOrdersTestdata.filter(o => o.estado === status as any) : purchaseOrdersTestdata);
    const url = status ? `${this.apiOrders}/data?status=${status}` : `${this.apiOrders}/data`;
    return this.http.get<PurchaseOrder[]>(url).pipe(
      catchError(err => { this.errorHandler.handleError(err); return throwError(() => err); })
    );
  }

  createPurchaseOrder(po: PurchaseOrder): Observable<PurchaseOrder> {
    if (isTesting) { (purchaseOrdersTestdata as PurchaseOrder[]).push(po); return of(po); }
    return this.http.post<PurchaseOrder>(`${this.apiOrders}/data`, po).pipe(
      catchError(err => { this.errorHandler.handleError(err); return throwError(() => err); })
    );
  }

  addItem(orderId: string, item: PurchaseOrderItem): Observable<PurchaseOrder> {
    if (isTesting) {
      const order = purchaseOrdersTestdata.find(o => o.id === orderId);
      if (order) {
        (order.items ??= []).push(item);
        order.total = (order.items ?? []).reduce((a, i) => a + (i.subtotal ?? i.precioUnitario * i.cantidad), 0);
      }
      return of(order as PurchaseOrder);
    }
    return this.http.post<PurchaseOrder>(`${this.apiOrders}/data/${orderId}/items`, item).pipe(
      catchError(err => { this.errorHandler.handleError(err); return throwError(() => err); })
    );
  }
}
