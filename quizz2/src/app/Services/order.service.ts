import { Injectable } from '@angular/core';

import { Order } from '../Interface/order';
import { DateTime } from 'luxon';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orders: Order[] = [
    {
      id: 1,
      invoice: 'INV-2018-09-0001',
      date: DateTime.local(2018, 9, 1),
      amount: 500,
      paymentMethod: 'Paypal',
      status: 'Paid'
    },
    {
      id: 2,
      invoice: 'INV-2018-09-0002',
      date: DateTime.local(2018, 9, 2),
      amount: 600,
      paymentMethod: 'Credit Card',
      status: 'Pending'
    },
    {
      id: 3,
      invoice: 'INV-2018-09-0003',
      date: DateTime.local(2018, 9, 3),
      amount: 700,
      paymentMethod: 'Paypal',
      status: 'Paid'
    },
    {
      id: 4,
      invoice: 'INV-2018-09-0004',
      date: DateTime.local(2018, 9, 4),
      amount: 800,
      paymentMethod: 'Bank Transfer',
      status: 'Pending'
    },
    {
      id: 5,
      invoice: 'INV-2018-09-0005',
      date: DateTime.local(2018, 9, 5),
      amount: 900,
      paymentMethod: 'Credit Card',
      status: 'Paid'
    },
    {
      id: 6,
      invoice: 'INV-2018-09-0006',
      date: DateTime.local(2018, 9, 6),
      amount: 1000,
      paymentMethod: 'Paypal',
      status: 'Pending'
    },
    {
      id: 7,
      invoice: 'INV-2018-09-0007',
      date: DateTime.local(2018, 9, 7),
      amount: 1100,
      paymentMethod: 'Bank Transfer',
      status: 'Paid'
    },
    {
      id: 8,
      invoice: 'INV-2018-09-0008',
      date: DateTime.local(2018, 9, 8),
      amount: 1200,
      paymentMethod: 'Credit Card',
      status: 'Cancelled'
    },
    {
      id: 9,
      invoice: 'INV-2018-09-0009',
      date: DateTime.local(2018, 9, 9),
      amount: 1300,
      paymentMethod: 'Paypal',
      status: 'Paid'
    },
    {
      id: 10,
      invoice: 'INV-2018-09-0010',
      date: DateTime.local(2018, 9, 10),
      amount: 1400,
      paymentMethod: 'Bank Transfer',
      status: 'Paid'
    },
    {
      id: 11,
      invoice: 'INV-2018-09-0011',
      date: DateTime.local(2018, 9, 11),
      amount: 1500,
      paymentMethod: 'Credit Card',
      status: 'Paid'
    },
    {
      id: 12,
      invoice: 'INV-2018-09-0012',
      date: DateTime.local(2018, 9, 12),
      amount: 1600,
      paymentMethod: 'Paypal',
      status: 'Cancelled'
    },
    {
      id: 13,
      invoice: 'INV-2018-09-0013',
      date: DateTime.local(2018, 9, 13),
      amount: 1700,
      paymentMethod: 'Bank Transfer',
      status: 'Paid'
    },
    {
      id: 14,
      invoice: 'INV-2018-09-0014',
      date: DateTime.local(2018, 9, 14),
      amount: 1800,
      paymentMethod: 'Credit Card',
      status: 'Pending'
    },
    {
      id: 15,
      invoice: 'INV-2018-09-0015',
      date: DateTime.local(2018, 9, 15),
      amount: 1900,
      paymentMethod: 'Paypal',
      status: 'Paid'
    },
    {
      id: 16,
      invoice: 'INV-2018-09-0016',
      date: DateTime.local(2018, 9, 16),
      amount: 2000,
      paymentMethod: 'Bank Transfer',
      status: 'Cancelled'
    },
    {
      id: 17,
      invoice: 'INV-2018-09-0017',
      date: DateTime.local(2018, 9, 17),
      amount: 2100,
      paymentMethod: 'Credit Card',
      status: 'Paid'
    },
    {
      id: 18,
      invoice: 'INV-2018-09-0018',
      date: DateTime.local(2018, 9, 18),
      amount: 2200,
      paymentMethod: 'Paypal',
      status: 'Pending'
    },
    {
      id: 19,
      invoice: 'INV-2018-09-0019',
      date: DateTime.local(2018, 9, 19),
      amount: 2300,
      paymentMethod: 'Bank Transfer',
      status: 'Paid'
    },
    {
      id: 20,
      invoice: 'INV-2018-09-0020',
      date: DateTime.local(2018, 9, 20),
      amount: 2400,
      paymentMethod: 'Credit Card',
      status: 'Cancelled'
    }
  ];

  constructor() { }
  
  GetOrders(): Order[] {
    return this.orders;
  }

  GetSpesificOrder(id: number): Order {
    return this.orders.find(order => order.id == id)!;
  }
}
