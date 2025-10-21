import { Routes } from '@angular/router'
import { InventoryViewComponent } from './features/inventory/inventory-view/inventory-view'

export const routes: Routes = [
  { path: 'inventory', component: InventoryViewComponent },
  { path: '', redirectTo: 'inventory', pathMatch: 'full' }
]
