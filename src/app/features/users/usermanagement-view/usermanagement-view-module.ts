import { NgModule } from '@angular/core';

import { UsermanagementView } from './usermanagement-view';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: UsermanagementView },
  {
    path: 'new',
    loadComponent: () =>
      import('../usermanagement-view-create/usermanagement-view-create').then(
        (m) => m.UsermanagementViewCreate
      ),
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UsermanagementView, // ✅ Se importa, no se declara
  ],
})
export class UsermanagementViewModule {}
