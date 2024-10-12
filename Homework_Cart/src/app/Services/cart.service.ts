import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../Interface/product';
import { Cart } from '../Interface/cart';

import * as couponsData from '../../assets/cupones.json';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: Cart[] = [];
  private cartSubject = new BehaviorSubject<Cart[]>(this.cartItems);

  cart$ = this.cartSubject.asObservable();
  constructor() {}

  AddToCart(product: Product, quantity: number) {
    const existingCartItem = this.cartItems.find(item => item.product.id === product.id);

    if (existingCartItem) {
      existingCartItem.quantity += quantity;
      existingCartItem.price = Number(product.price) * existingCartItem.quantity;
    } else {
      const cartPrice = Number(product.price) * quantity;
      this.cartItems.push({
        product,
        quantity,
        price: cartPrice,
      });
    }
  }

  IncreaseCartItemQuantity(cartItem: Cart) {
    cartItem.quantity++;
    cartItem.price = Number(cartItem.product.price) * cartItem.quantity;
  }

  DecreaseCartItemQuantity(cartItem: Cart) {
    cartItem.quantity--;
    cartItem.price = Number(cartItem.product.price) * cartItem.quantity;
  }

  DeleteCartItem(cartItem: Cart) {
    this.cartItems = this.cartItems.filter(item => item.product.id !== cartItem.product.id);
    this.cartSubject.next(this.cartItems);
  }

  CleanCart() {
    this.cartItems = [];
    this.cartSubject.next(this.cartItems);
  }

  GetCoupons() {
    return (couponsData as any).default;

  }
}
