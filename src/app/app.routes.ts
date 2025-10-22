import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'sales',
    loadComponent: () =>
      import('./features/sales/sales-view/sales-view')
        .then(m => m.SalesViewComponent) 
  },
  { path: '', redirectTo: 'sales', pathMatch: 'full' }
];
