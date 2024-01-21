import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
];
