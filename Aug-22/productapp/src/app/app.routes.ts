import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'productlist', pathMatch: 'full' },

  {
    path: 'productlist',
    loadComponent: () =>
      import('./productlist/productlist').then(m => m.Productlist)
  },
  {
    path: 'productadd',
    loadComponent: () =>
      import('./productadd/productadd').then(m => m.Productadd)
  },
  {
    path: 'productedit/:id',
    loadComponent: () =>
      import('./productedit/productedit').then(m => m.Productedit)
  },
  {
    path: 'productdelete/:id',
    loadComponent: () =>
      import('./productdelete/productdelete').then(m => m.Productdelete)
  },

  { path: '**', redirectTo: 'productlist' }
];
