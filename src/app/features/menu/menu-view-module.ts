import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenumanagementView } from './menu-view';

const routes: Routes = [
  { path: '', component: MenumanagementView }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MenumanagementView, // ✅ Se importa, no se declara
  ],
})
export class MenumanagementViewModule {}
