import { Routes } from '@angular/router';

import { PageComponent } from './layout/layout/layout.component';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: PageComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];