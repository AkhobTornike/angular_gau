import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../Interface/product';
import * as productsData from '../../../public/products.json';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor() { }

  getProducts(): Product[] {
    return (productsData as any).default;
  }
}
