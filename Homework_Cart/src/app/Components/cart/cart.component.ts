import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { CartService } from '../../Services/cart.service';
import { Cart } from '../../Interface/cart';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  private cartService = inject(CartService);
  private route: Router = inject(Router);

  cartItems!: Cart[];
  cuponeCode!: string;
  coupons = this.cartService.GetCoupons();
  quantities: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public isloading: boolean = false;

  ngOnInit(): void {
    this.cartService.cart$.subscribe((items) => {
      this.cartItems = items;
    });
  }

  get subtotal() {
    return this.cartItems.reduce((acc, item) => acc + item.price, 0);
  }

  get discount() {
    return this.subtotal * ((this.applyCoupon() as number) / 100);
  }

  get tax() {
    return this.subtotal * 0.16;
  }

  get total() {
    return this.subtotal - this.discount + this.tax;
  }


  applyCoupon() {
    const today = new Date();
    const coupon = this.coupons.find(
      (coupon: { code: string }) => coupon.code === this.cuponeCode
    );
    if (coupon) {
      const couponDate = new Date(coupon.expiryDate);
      if (today > couponDate) {
        return coupon.discount;
      }
    }
    return 0;
  }

  decreaseQuantity(item: Cart) {this.cartService.DecreaseCartItemQuantity(item);}
  increaseQuantity(item: Cart) {this.cartService.IncreaseCartItemQuantity(item);}
  removeFromCart(item: Cart) {this.cartService.DeleteCartItem(item)}
  cleanCart() {this.cartService.CleanCart()}

  checkout() {
    this.cartService.CleanCart()
    this.isloading = true

    setTimeout(() => {
      this.route.navigate(['/'])
      this.isloading = false
    }, 3000)
  }

  backToShop() {this.route.navigate(['/']);}
}
