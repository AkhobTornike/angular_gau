import { Component, inject } from '@angular/core';
import { Product } from '../../Interface/product.interface';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from '../../Services/products.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.css'
})
export class BreadcrumbsComponent {
  
  private route:Router = inject(Router)

  currentPage: string[] = [];

  ngOnInit() {
    this.route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        this.currentPage = []
        this.currentPage = this.getPageName(url)
      }
    })
  }

  getPageName(url: string): string[] {
    if (url.startsWith('/product/product-list')) {
      return ['Product', 'Product-List']
    }
    else if (url.startsWith('/product/product-detail')) {
      return ['Product', 'Product-Detail']
    }
    else if (url.startsWith('/home')) {
      return ['Home']
    }
    else if (url.startsWith('/help')) {
      return ['Help']
    }

    return ['Help']
  }
}
