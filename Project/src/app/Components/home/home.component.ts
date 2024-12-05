import { Component, OnInit } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { PartnersComponent } from "./partners/partners.component";
import { ProductsService } from '../../Services/products.service';
import { CommonModule } from '@angular/common';
import { Product } from '../../Interface/product';
import { DressStyleComponent } from "./dress-style/dress-style.component";
import { ReviewsComponent } from "./reviews/reviews.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, PartnersComponent, CommonModule, DressStyleComponent, ReviewsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public newArrivalsProducts: Product[] = [];
  public topSellingsProducts: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.newArrivalsProducts = this.productsService.getProducts().slice(0, 4);
    this.topSellingsProducts = this.productsService.getProducts().filter(product => product.assessment[0] >= 4.5).slice(0, 4);
  }

  getAssessmentValue(assessment: Float32Array): number {
    return assessment[0]; // Get the first value of the Float32Array
  }

  getStars(rating: number): number[] {
    return Array(Math.round(rating)).fill(0); // Generate star icons dynamically
  }

}
