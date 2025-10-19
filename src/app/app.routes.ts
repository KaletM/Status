import { Routes } from '@angular/router';
import { SalesViewComponent } from './features/sales/sales-view/sales-view';

export const routes: Routes = [
  { path: '', component: SalesViewComponent },
  { path: '**', redirectTo: '' }
];
