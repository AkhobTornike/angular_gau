import { Component, Input } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { DetailesComponent } from './detailes/detailes.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { QuestionsComponent } from './questions/questions.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    DetailesComponent,
    ShippingComponent,
    ReviewsComponent,
    QuestionsComponent,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  @Input() selectedSize: string = '';
  
  selectedComponent: string = '';

  onComponentSelected(component: string) {
    this.selectedComponent = component;
  }
}
