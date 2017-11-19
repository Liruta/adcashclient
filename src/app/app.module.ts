import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { ROUTES } from "./app.routes";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';

import { OrdersService } from './orders/orders.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [
    OrdersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
