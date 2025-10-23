import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: 'companies',
    loadComponent: () =>
      import('./features/companies/company-view/company-view').then(m => m.CompanyViewComponent)
  }
]
