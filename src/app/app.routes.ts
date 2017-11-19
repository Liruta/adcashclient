import { Routes } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { OrdersComponent } from "app/orders/orders.component";

export const ROUTES: Routes = [
  // Main redirect
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {path: 'home', component: HomeComponent},
  {path: 'orders', component: OrdersComponent},

  // Handle all other routes
  { path: '**', redirectTo: 'home' }
];
