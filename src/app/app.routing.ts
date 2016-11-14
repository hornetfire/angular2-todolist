import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { todoRoutes } from './todo/todo.routes';

const appRoutes: Routes = [
  ...todoRoutes
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);