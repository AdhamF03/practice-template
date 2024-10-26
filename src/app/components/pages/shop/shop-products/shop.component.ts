import { Component, OnInit, inject } from '@angular/core';
import { ServiceService } from '../../../../core/services/service.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent implements OnInit {
  constructor(private route: ActivatedRoute, private service: ServiceService) {}

  readonly router = inject(Router);
  product: any;
  products: any = [];
  originalProducts: any = [];
  currentSort: string = 'Default Sorting';
  category: any;

  ngOnInit() {
    // Get all products from the service and store
    this.products = this.service.products;
    this.originalProducts = [...this.products];

    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.product = this.service.getProductById(Number(id));
      }
    });
  }

  // Get total number of products
  get totalProducts(): number {
    return this.products.length;
  }

  // Update the `currentSort` variable based on the clicked option

  // PRODUCT SORTING
  sortLowToHigh() {
    this.products.sort((a: any, b: any) => a.currentPrice - b.currentPrice);
  }

  sortHighToLow() {
    this.products.sort((a: any, b: any) => b.currentPrice - a.currentPrice);
  }
  // Reset to the original product list
  restoreDefault() {
    this.products = [...this.originalProducts];
  }
  // CATEGORY FILTERS
  filterByCeramic() {
    this.products = this.originalProducts.filter(
      (product: any) => product.category === 'Ceramic'
    );
  }
  filterByPottery() {
    this.products = this.originalProducts.filter(
      (product: any) => product.category === 'Pottery'
    );
  }
  filterByKitchenware() {
    this.products = this.originalProducts.filter(
      (product: any) => product.category === 'Ceramic Kitchenware'
    );
  }

  updateSort(option: string) {
    this.currentSort = option;

    // Apply the appropriate sorting/filtering logic based on the option
    switch (option) {
      case 'Sort by price: low to high':
        this.sortLowToHigh();
        break;
      case 'Sort by price: high to low':
        this.sortHighToLow();
        break;
      default:
        this.restoreDefault();
        break;
    }
  }
}
