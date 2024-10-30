import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../Services/order.service';
import { Order } from '../../Interface/order';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit {
  public orders: Order[] = [];
  public ordersLength: number = 0;
  
  constructor (private orderService: OrderService) {}

  ngOnInit() {
    this.orders = this.orderService.GetOrders();
    this.ordersLength = this.countOrders();
  }

  countOrders(): number {
    return this.orders.length;
  }

}
