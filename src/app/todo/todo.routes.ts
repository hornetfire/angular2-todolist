import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { TodoComponent } from './todo.component';
import { TodoArchiveComponent } from './todo-archive.component';

export const todoRoutes: Routes = [
  { path: '', redirectTo: 'todo', pathMatch: 'full' },
  { path: 'todo', component: TodoComponent },
  { path: 'todoArchive', component: TodoArchiveComponent }
];