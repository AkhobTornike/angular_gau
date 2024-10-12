import { Routes } from '@angular/router';

import { ProductListComponent } from './Components/product-list/product-list.component';
import { CartComponent } from './Components/cart/cart.component';

export const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'cart', component: CartComponent},
];
