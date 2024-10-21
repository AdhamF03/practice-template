import { Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ProductsDetailsComponent } from './components/pages/shop/products-details/products-details/products-details.component';
import { ShopComponent } from './components/pages/shop/shop-products/shop.component';
import { ContactComponent } from './components/pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'shop/:id', component: ProductsDetailsComponent },
];
