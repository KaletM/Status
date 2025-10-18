import { Routes } from '@angular/router';
import { MainLayout } from './features/layout/main-layout/main-layout';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
            {path: 'users', loadChildren: () => import('./features/users/usermanagement-view/usermanagement-view-module').then(m => m.UsermanagementViewModule)},
        ]
    },
];
