import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { Product } from '../../Interface/product.interface';
import { ProductsService } from '../../Services/products.service';
import { ProductComponent } from "../product/product.component";
import { ProductDetailsComponent } from "../product-details/product-details.component";

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ProductComponent, ProductDetailsComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  products: Product[] = []
  public isDetailVisible: boolean = false;
  public selectedProduct: Product | null = null;

  constructor(private ProductsService: ProductsService) { }

  ngOnInit(): void {
    this.ProductsService.GetAllProducts().subscribe((products) => {
      this.products = products
    })
  }

  onProductSelected(product: Product): void {
    this.selectedProduct = product;
    this.isDetailVisible = true;
    console.log('Product selected:', product);
    console.log('isDetailVisible:', this.isDetailVisible);
  }

  hideProductDetails(): void {
    this.isDetailVisible = false;
    this.selectedProduct = null;
  }

  
}
