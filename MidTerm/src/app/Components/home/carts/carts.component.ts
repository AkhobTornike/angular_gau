import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
export class CartsComponent implements OnInit {
  public cartItems: Products[] = []
  public subtotal: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
    this.subtotal = this.cartService.getTotalPrice();
  }

  deleteCart(product: Products) {
    this.cartService.deleteFromCart(product);
    this.cartItems = this.cartService.getCart();
  }
}
