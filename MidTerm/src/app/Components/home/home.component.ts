import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from "./products/products.component";
import { CartsComponent } from "./carts/carts.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ProductsComponent, CartsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor() { }
}
