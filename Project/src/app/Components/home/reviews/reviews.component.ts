import { Component, OnInit } from '@angular/core';
import { Review } from '../../../Interface/review';
import { ReviewsService } from '../../../Services/reviews.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent implements OnInit{
  public reviews: Review[] = [];

  constructor(private reviewsService: ReviewsService) {}

  ngOnInit(): void {
    this.reviews = this.reviewsService.getReviews();
    this.reviews.forEach(review => {
      console.log('Review ID:', review.reviewID, 'Stars:', review.stars);
    });
  }
  
  

  getStars(starsArray: Float32Array): number[] {
    if (!starsArray || starsArray.length === 0) {
      return []; // Return an empty array if starsArray is null or empty
    }
  
    const rating = starsArray[0]; // Extract the first element of the Float32Array
    if (isNaN(rating) || rating <= 0) {
      return []; // Return an empty array for invalid or zero ratings
    }
  
    return Array(Math.round(rating)).fill(0); // Safely create the array for star rendering
  }
  
  
}
