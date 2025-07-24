import { Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  {
    path: 'add',
    loadComponent: () =>
      import('./components/todo-form/todo-form.component').then(m => m.TodoFormComponent)
  },
  {
    path: 'list',
    loadComponent: () =>
      import('./components/todo-list/todo-list.component').then(m => m.TodoListComponent)
  },
  {
    path: 'favorite',
    loadComponent: () =>
      import('./components/todo-favorite/todo-favorite.component').then(m => m.TodoFavoriteComponent)
  },
    {path:'**', component: PageNotFoundComponent}
];

