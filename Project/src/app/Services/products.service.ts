import { Injectable } from '@angular/core';
import { Product } from '../Interface/product';

import * as productsData from '../../../public/products.json';
import * as reviewsData from '../../../public/reviews.json';
import * as usersData from '../../../public/users.json';
import { Review } from '../Interface/review';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor() { }

  getProducts(): Product[] {
    return (productsData as any).default;
  }

  getUsers(): string[] {
    return (usersData as any).default;
  }
}
