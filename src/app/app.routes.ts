import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./modules/dashboard/dashboard.page').then((m) => m.DashboardPage),
  },
  {
    path: 'profiles',
    loadComponent: () =>
      import('./modules/profiles/profiles.page').then((m) => m.ProfilesPage),
  },
  {
    path: 'income',
    loadComponent: () =>
      import('./modules/income/income.page').then((m) => m.IncomePage),
  },
  {
    path: 'expenses',
    loadComponent: () =>
      import('./modules/expenses/expenses.page').then((m) => m.ExpensesPage),
  },
  {
    path: 'users',
    loadComponent: () =>
      import('./modules/users/users.page').then((m) => m.UsersPage),
  },
];
