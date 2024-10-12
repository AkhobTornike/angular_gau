import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';

import { Product } from '../../Interface/product';
import * as productsData from '../../../assets/products.json';
import { ProductComponent } from "./product/product.component";
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  private productService = inject(ProductService);

  public products: Product[] = [];

  ngOnInit(): void {
    this.products = this.productService.GetProducts();
  }

}
