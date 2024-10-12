import { Injectable } from '@angular/core';
import * as productsData from '../../assets/products.json';
import { Product } from '../Interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  GetProducts(): Product[] {
    return (productsData as any).default;
  }

  GetOneProduct(id: number) : Product {
    return (productsData as any).default.find(
      (prouduct: { id: number }) => prouduct.id === id
    );
  }
}
