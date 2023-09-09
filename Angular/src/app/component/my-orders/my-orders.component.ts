import { Component, OnInit } from '@angular/core';
import { OrderService } from './order-service.service';
import { MenuItem } from 'src/app/types/Menu';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Location } from '@angular/common';



@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrderListComponent implements OnInit {
  orders: MenuItem[] = [];
  totalOrdersPrice = 0;
  userId: string | null = null;

  constructor(private orderService: OrderService, private afAuth: AngularFireAuth, private location: Location) { }

  ngOnInit(): void {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userId = user.uid;
        this.getOrders();
      } else {
        this.userId = null;
        this.orders = [];
        this.totalOrdersPrice = 0;
      }
    });
  }

  async addOrder(menuItem: MenuItem): Promise<void> {
    try {
      await this.orderService.addToOrders(menuItem);
      this.getOrders();
    } catch (error) {
      console.error('Error adding order:', error);
    }
  }

  getOrders(): void {
    if (this.userId) {
      this.orderService.getOrdersByUserId(this.userId).subscribe((orders: MenuItem[]) => {
        this.orders = orders;
        this.calculateTotalOrdersPrice();
      });
    }
  }

  calculateTotalOrdersPrice(): void {
    this.totalOrdersPrice = this.orders.reduce((total, order) => {
      return total + order.price * order.quantity;
    }, 0);
  }

  async buyOrders(): Promise<void> {
    if (this.userId) {
      await this.orderService.deleteOrdersByUserId(this.userId);
      this.getOrders();
      window.alert('Your order is on way')
    }
  }

  async deleteOrder(order: MenuItem): Promise<void> {
    try {
      if (order.orderId) {
        await this.orderService.removeFromOrders(order.orderId);
        this.getOrders();
        this.totalOrdersPrice -= order.price * order.quantity;
      }
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  }

  goBack(): void {
    this.location.back();
  }
}