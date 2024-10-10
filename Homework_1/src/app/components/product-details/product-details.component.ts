import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from '../../Services/products.service';
import { Product } from '../../Interface/product.interface';
import { ActivatedRoute } from '@angular/router';
import { get } from 'node:http';
import { Subscription } from 'rxjs';
import { BreadcrumbsComponent } from "../breadcrumbs/breadcrumbs.component";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [BreadcrumbsComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent{
  @Output() closeDetails = new EventEmitter<void>();
  @Input() public productSelected!: Product;

  constructor() { }

  cancelDetailView() {
    this.closeDetails.emit();
  }
 }
