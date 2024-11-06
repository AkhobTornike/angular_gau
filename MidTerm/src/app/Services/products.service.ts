import { Injectable } from '@angular/core';
import { Products } from '../Interface/products';

@Injectable({
  providedIn: 'root'
},)
export class ProductsService {

  private products : Products[] = [
    {
      name: "Chair",
      description: "Comfortable and stylish",
      price: 120,
      discount: 10,
      discountPercentage: 8.33,
      isNew: false,
      imageName: "image1.png"
      },
      
      {
      name: "Table",
      description: "Made of high-quality wood",
      price: 250,
      discount: 0,
      discountPercentage: 0,
      isNew: true,
      imageName: "image2.png"
      },
      
      {
      name: "Sofa",
      description: "Modern design",
      price: 480,
      discount: 0,
      discountPercentage: 0,
      isNew: false,
      imageName: "image3.png"
      },
      
      {
      name: "Bed",
      description: "Classic and elegant",
      price: 380,
      discount: 50,
      discountPercentage: 13.16,
      isNew: false,
      imageName: "image4.png"
      },
      
      {
      name: "Desk",
      description: "Modern design",
      price: 600,
      discount: 0,
      discountPercentage: 0,
      isNew: true,
      imageName: "image1.png"
      },
      
      {
      name: "Cabinet",
      description: "Made of high-quality wood",
      price: 720,
      discount: 0,
      discountPercentage: 0,
      isNew: true,
      imageName: "image2.png"
      },
      
      {
      name: "Shelf",
      description: "Classic and elegant",
      price: 280,
      discount: 0,
      discountPercentage: 0,
      isNew: false,
      imageName: "image3.png"
      },
      
      {
      name: "Dresser",
      description: "Comfortable and stylish",
      price: 150,
      discount: 20,
      discountPercentage: 13.33,
      isNew: false,
      imageName: "image4.png"
      },
      
      {
      name: "Chair",
      description: "Modern design",
      price: 100,
      discount: 0,
      discountPercentage: 0,
      isNew: true,
      imageName: "image1.png"
      },
      
      {
      name: "Table",
      description: "Classic and elegant",
      price: 210,
      discount: 0,
      discountPercentage: 0,
      isNew: true,
      imageName: "image2.png"
      },
      
      {
      name: "Sofa",
      description: "Comfortable and stylish",
      price: 400,
      discount: 30,
      discountPercentage: 7.5,
      isNew: false,
      imageName: "image3.png"
      },
      
      {
      name: "Bed",
      description: "Made of high-quality wood",
      price: 520,
      discount: 0,
      discountPercentage: 0,
      isNew: false,
      imageName: "image4.png"
      },
      
      {
      name: "Desk",
      description: "Comfortable and stylish",
      price: 550,
      discount: 0,
      discountPercentage: 0,
      isNew: true,
      imageName: "image1.png"
      },
      
      {
      name: "Cabinet",
      description: "Modern design",
      price: 680,
      discount: 0,
      discountPercentage: 0,
      isNew: true,
      imageName: "image2.png"
      },
      
      {
      name: "Shelf",
      description: "Made of high-quality wood",
      price: 320,
      discount: 40,
      discountPercentage: 12.5,
      isNew: false,
      imageName: "image3.png"
      },
      
      {
      name: "Dresser",
      description: "Classic and elegant",
      price: 180,
      discount: 0,
      discountPercentage: 0,
      isNew: false,
      imageName: "image4.png"
      },
  ]

  constructor() { }

  getProducts() : Products[] {
    return this.products
  }
}
