import { Injectable } from '@angular/core';
import { Products } from '../Interface/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Products[] = [];

  constructor() { }

  addToCart(product: Products) {
    this.cart.push(product);
  }

  deleteFromCart(product: Products) {
    this.cart = this.cart.filter(item => item != product);
  }

  getCart(): Products[] {
    return this.cart;
  }
}
