import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Product } from '../../Interface/product.interface';
import { ProductsService } from '../../Services/products.service';
import { ProductDetailsComponent } from "../product-details/product-details.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductDetailsComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() productSelected = new EventEmitter<Product>();

  constructor() { }

  showProductDetails() {
    this.productSelected.emit(this.product)
  }

}
