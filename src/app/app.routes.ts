import { Routes } from '@angular/router';
import { PageComponent } from './layout/page/page.component';

export const routes: Routes = [
  {
    path: '',
    component: PageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];