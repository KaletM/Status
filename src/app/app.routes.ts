import { Routes } from '@angular/router';
import { MainLayout } from './features/layout/main-layout/main-layout';
import { Waiterlayout } from './features/waiterlayout/waiterlayout';

export const routes: Routes = [
  {
    path: 'admin',
    component: MainLayout,

    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard').then((m) => m.Dashboard),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./features/users/usermanagement-view/usermanagement-view-module').then(
            (m) => m.UsermanagementViewModule
          ),
      },
      {
        path: 'menu',
        loadComponent: () => import('./features/menu/menu-view').then((m) => m.MenumanagementView),
      },
      {
        path: 'inventory',
        loadComponent: () =>
          import('./features/inventory/inventory-view/inventory-view').then(
            (m) => m.InventoryViewComponent
          ),
      },
      {
        path: 'support',
        loadComponent: () =>
          import('./features/support-view/support-view').then((m) => m.SupportView),
      }
    ],
  },
  {
    path: 'waiter',
    component: Waiterlayout,
  },
  {
    path: 'companies',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/companies/company-view/company-view').then(
            (m) => m.CompanyViewComponent
          ),
      },
      {
        path: 'new',
        loadComponent: () =>
          import('./features/companies/company-create/company-view').then(
            (m) => m.CompanyCreateComponent
          ),
      }
    ]
  },
  {
    path: 'sales',
    loadComponent: () =>
      import('./features/sales/sales-view/sales-view').then((m) => m.SalesViewComponent),
  },
  {
    path: 'kitchen',
    loadComponent: () =>
      import('./features/kitchen-view/kitchen-view').then((m) => m.KitchenView)
  },
  {
    path: '',
    loadComponent: () => import('./features/login/login-view/login-view').then((m) => m.LoginView),
  }
];
