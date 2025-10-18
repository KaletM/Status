import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsermanagementView } from './usermanagement-view';

const routes: Routes = [
  { path: '', component: UsermanagementView  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsermanagementViewRoutingModule { }
