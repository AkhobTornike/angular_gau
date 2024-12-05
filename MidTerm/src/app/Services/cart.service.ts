import { Injectable } from '@angular/core';
import { Products } from '../Interface/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Products[] = [];
  private totalPrice: number = 0;

  constructor() { }

  addToCart(product: Products) {
    this.cart.push(product);
    this.totalPrice += product.price;
    console.log(this.totalPrice)
  }

  deleteFromCart(product: Products) {
    this.cart = this.cart.filter(item => item != product);
  }

  getCart(): Products[] {
    return this.cart;
  }
  getTotalPrice(): number {
    return this.totalPrice;
  }
}
