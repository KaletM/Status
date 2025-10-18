import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsermanagementViewRoutingModule } from './usermanagement-view-routing-module';
import { UsermanagementView } from './usermanagement-view';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule,
    UsermanagementView  // ✅ Se importa, no se declara
  ]
})

export class UsermanagementViewModule { }
