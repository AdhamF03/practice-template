import { Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ProductsDetailsComponent } from './components/pages/shop/products-details/products-details/products-details.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'shop', component: ProductsDetailsComponent },
  { path: 'shop/:id', component: ProductsDetailsComponent },
];
