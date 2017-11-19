import { Component, OnInit } from '@angular/core';

import { OrdersService } from './orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  users = [];
  products = [];
  orders = [];
  limit = '';
  search = '';
  order = '';

  newOrder = {
    id: false,
    user: false,
    product: false,
    quantity: false
  }


  constructor(
    private ordersService: OrdersService
  ) { }

  ngOnInit() {
    this.getUsers();
    this.getProducts();
    this.getOrders();
  }

  resetNewOrder() {
    this.newOrder = {
      id: false,
      user: false,
      product: false,
      quantity: false
    }
  }

  getUsers() {
    this.ordersService.getUsers()
      .subscribe(response => {
        if (response.data) {
          this.users = response.data;
        }
      })
  }

  getProducts() {
    this.ordersService.getProducts()
      .subscribe(response => {
        if (response.data) {
          this.products = response.data;
        }
      })
  }

  createOrder() {

    if (this.newOrder.product && this.newOrder.quantity && this.newOrder.user) {
        this.ordersService.createOrder(this.newOrder)
          .subscribe(response => {
            this.getOrders();
            this.resetNewOrder();
          })
    }
  }

  getOrders() {
    let extendedUrl = '';
    let filters = [];
    if(this.limit) {
      filters.push('limit=' + this.limit);
    }
    if(this.order) {
      filters.push('order_by=' + this.order);
    }
    if(this.search) {
      filters.push('keyword=' + encodeURI(this.search));
    }
    if(filters.length > 0) {
      extendedUrl = '?' + filters.join('&');
    }
    this.ordersService.getOrders(extendedUrl)
      .subscribe(response => {
        if (response.data) {
          this.orders = response.data;
        }
      })
  }

  deleteOrder(orderId) {
    this.ordersService.deleteOrder(orderId)
      .subscribe(response => {
        this.getOrders();        
      })
  }

  editOrder(orderId) {
    let thisOrder = this.orders.find(order => order.id == orderId);
    if (thisOrder) {
      this.newOrder.id = thisOrder.id;
      this.newOrder.product = thisOrder.productId;
      this.newOrder.user = thisOrder.userId;
      this.newOrder.quantity = thisOrder.quantity;
    }
  }

}
