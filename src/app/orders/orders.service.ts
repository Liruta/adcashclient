import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { Injectable, Inject } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class OrdersService {

  headers = new Headers();


  apiRoute = 'http://localhost/adcash/api/index.php/';
  userRoute = this.apiRoute + 'user';
  productsRoute = this.apiRoute + 'product';
  orderRoute = this.apiRoute + 'order';

  constructor(
    private http: Http,
    private router: Router
  ) {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
  }

  getUsers() {
    return this.http.get(this.userRoute + '/getUsers', { headers: this.headers })
      .map(response => response.json());
  }

  getProducts() {
    return this.http.get(this.productsRoute + '/getProducts', { headers: this.headers })
      .map(response => response.json());
  }

  getOrders(extendedUrl = '') {
    return this.http.get(this.orderRoute + '/getOrders' + extendedUrl, { headers: this.headers })
      .map(response => response.json());
  }

  createOrder(newOrder) {
    return this.http.post(this.orderRoute + '/postOrder', JSON.stringify(newOrder), { headers: this.headers })
      .map(response => response.json());
  }

  deleteOrder(orderId) {
    return this.http.post(this.orderRoute + '/deleteOrder', JSON.stringify({'orderId': orderId}), { headers: this.headers })
    .map(response => response.json());
  }

}
