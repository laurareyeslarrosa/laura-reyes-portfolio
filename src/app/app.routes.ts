import { Routes } from '@angular/router';
import { ContainerComponent } from './shared/components/container/container.component';

export const routes: Routes = [
  {
    path: '',
    component: ContainerComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];