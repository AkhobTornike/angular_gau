import { Component, inject, Input } from '@angular/core';
import { Product } from '../../../Interface/product';
import { RouterModule } from '@angular/router';
import { CartService } from '../../../Services/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  @Input() product!: Product;

  private cartService = inject(CartService);

  constructor() {}

  addToCart() {
    this.cartService.AddToCart(this.product, 1);
  }
}
