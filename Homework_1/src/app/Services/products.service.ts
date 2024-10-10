import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../Interface/product.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = []

  constructor(private http: HttpClient) { }

  private baseUrl = 'https://fakestoreapi.com/products'

  GetAllProducts(): Observable<Product[]>
  {
    return this.http.get<Product[]>(this.baseUrl)
  }

  GetProductById(id: number): Observable<Product>
  {
    return this.http.get<Product>(`${this.baseUrl}/${id}`)
  }
} 
