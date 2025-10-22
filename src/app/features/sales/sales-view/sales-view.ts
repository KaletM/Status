import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SalesService } from '../../../core/services/salesService';
import Sale from '../../../core/entities/Sale';

type Payment = 'cash' | 'card' | 'transfer' | 'app';

@Component({
  selector: 'app-sales-view',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sales-view.html',
  styleUrls: ['./sales-view.css'],
})
export class SalesViewComponent implements OnInit {
  // lo que ya tenías
  sales: Sale[] = [];

  // lo que pide tu HTML
  order: {
    items: { id: string; productName: string; quantity: number; unitPrice: number; taxAmount: number; discount: number; total: number }[];
    subtotal: number;
    taxes: number;
    discount: number;
    total: number;
    paymentMethod: Payment;
    sendInvoice: boolean;
  } = {
    items: [],
    subtotal: 0,
    taxes: 0,
    discount: 0,
    total: 0,
    paymentMethod: 'cash',
    sendInvoice: false,
  };

  couponCode = '';

  constructor(private salesService: SalesService) {}

  ngOnInit(): void {
    this.salesService.getSales().subscribe((sales: Sale[]) => {
      this.sales = sales;

      const s = this.sales[0];
      if (s) {
        this.order.items = s.items.map(i => ({
          id: i.id,
          productName: i.productName,
          quantity: i.quantity,
          unitPrice: i.unitPrice,
          taxAmount: i.taxAmount,
          discount: i.discount,
          total: i.total,
        }));
        this.recompute();
        this.order.paymentMethod = (s as any).paymentMethod ?? 'cash';
      }
    });
  }

  applyCoupon(): void {
    // ejemplo simple: CUP10 -> 10% de descuento sobre subtotal
    if (this.couponCode.trim().toUpperCase() === 'CUP10') {
      this.order.discount = +(this.order.subtotal * 0.1).toFixed(2);
    } else {
      this.order.discount = 0;
    }
    this.recompute();
  }

  selectPayment(method: Payment): void {
    this.order.paymentMethod = method;
  }

  finalizeOrder(): void {
    console.log('order finalized:', this.order);
    alert('orden facturada (demo)');
  }

  private recompute(): void {
    const subtotal = this.order.items.reduce((acc, it) => acc + (it.unitPrice * it.quantity), 0);
    const taxes = this.order.items.reduce((acc, it) => acc + it.taxAmount, 0);
    const discount = this.order.discount ?? 0;
    this.order.subtotal = +subtotal.toFixed(2);
    this.order.taxes = +taxes.toFixed(2);
    this.order.total = +(subtotal + taxes - discount).toFixed(2);
  }
}
