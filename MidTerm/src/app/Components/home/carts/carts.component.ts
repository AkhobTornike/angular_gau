import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { CartService } from '../../../Services/cart.service';
import { Products } from '../../../Interface/products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.scss'
})
export class CartsComponent implements OnChanges {
  public cartItems: Products[] = []
  public subtotal: number = 0;

  constructor(private cartService: CartService) { 
    this.cartItems = this.cartService.getCart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.cartItems.forEach((item) => {
      this.subtotal += item.price;
    });
  }

  deleteCart(product: Products) {
    this.cartService.deleteFromCart(product);
    this.cartItems = this.cartService.getCart();
  }
}
