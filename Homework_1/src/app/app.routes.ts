import { Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { HomeComponent } from './components/home/home.component';
import { HelpComponent } from './components/help/help.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

export const routes: Routes = [
    {path: 'product/product-list', component: ProductsListComponent, title: 'product-list'},
    {path: '', component: HomeComponent, title: 'home'},
    {path: 'help', component: HelpComponent, title: 'help'}
];
