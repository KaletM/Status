import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InventoryService } from '../../../core/services/inventoryService';
import Product from '../../../core/entities/Product';

type Row = {
  name: string;
  qty: number;
  unit: string;
  status: 'Normal' | 'Low' | 'Out of Stock';
  badge: 'ok' | 'low' | 'out';
};

@Component({
  selector: 'app-inventory-view',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './inventory-view.html',
  styleUrls: ['./inventory-view.css']
})
export class InventoryViewComponent implements OnInit {
  rows: Row[] = [];

  statusSelected = 'status';
  categorySelected = 'category';
  supplierSelected = 'supplier';

  showStatus = false;
  showCategory = false;
  showSupplier = false;

  statusOptions = ['all', 'normal', 'low', 'out of stock'];
  categoryOptions = ['all', 'vegetables', 'grains', 'oils', 'dairy', 'herbs'];
  supplierOptions = ['all', 'fresh farm ltd.', 'italia gourmet sa'];

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.inventoryService.getProducts().subscribe((data: Product[]) => {
      this.rows = data.map(p => {
        const out = p.stockActual <= 0;
        const low = p.stockActual > 0 && p.stockActual <= p.stockMinimo;
        const idx = out ? 2 : (low ? 1 : 0);
        const status = ['Normal', 'Low', 'Out of Stock'][idx] as Row['status'];
        const badge = ['ok', 'low', 'out'][idx] as Row['badge'];
        return {
          name: this.cap(p.nombre),
          qty: p.stockActual,
          unit: this.cap(p.unidadMedida),
          status,
          badge
        };
      });
    });
  }

  toggle(menu: 'status' | 'category' | 'supplier', ev: MouseEvent) {
    ev.stopPropagation();
    this.showStatus = menu === 'status' ? !this.showStatus : false;
    this.showCategory = menu === 'category' ? !this.showCategory : false;
    this.showSupplier = menu === 'supplier' ? !this.showSupplier : false;
  }

  selectStatus(opt: string) { this.statusSelected = opt === 'all' ? 'status' : opt; this.showStatus = false; }
  selectCategory(opt: string) { this.categorySelected = opt === 'all' ? 'category' : opt; this.showCategory = false; }
  selectSupplier(opt: string) { this.supplierSelected = opt === 'all' ? 'supplier' : opt; this.showSupplier = false; }

  @HostListener('document:click') onDocClick() { this.showStatus = this.showCategory = this.showSupplier = false; }

  private cap(s: string) { return s ? s[0].toUpperCase() + s.slice(1) : s; }
}
