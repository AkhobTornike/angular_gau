import { Component } from '@angular/core';
import { Products } from '../../../Interface/products';
import { ProductsService } from '../../../Services/products.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../Services/cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  public products: Products[] = []

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
    ) {
    this.products = this.productsService.getProducts();
  }

  addCart(product: Products) {
    this.cartService.addToCart(product)
  }
}
