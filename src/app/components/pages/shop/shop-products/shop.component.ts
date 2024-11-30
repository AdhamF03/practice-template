import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { ServiceService } from '../../../../core/services/service.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ScrollToTopComponent } from '../../../shared/scroll-to-top/scroll-to-top.component';
import { ToastComponent } from '../../../shared/toast/toast.component';
import { CartService } from '../../../../core/services/cart.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, ScrollToTopComponent, ToastComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: ServiceService,
    private cartService: CartService
  ) {}

  @ViewChild(ToastComponent) toast!: ToastComponent;

  readonly router = inject(Router);
  product: any;
  products: any = [];
  originalProducts: any = [];
  currentSort: string = 'Default Sorting';
  category: any;
  quantity: number = 1;
  selectedCategory: string = '';

  ngOnInit() {
    window.scrollTo(0, 0);
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
  // PRODUCT SORTING
  sortLowToHigh() {
    this.products.sort((a: any, b: any) => a.currentPrice - b.currentPrice);
    this.currentSort = 'Price: Low to High';
  }

  sortHighToLow() {
    this.products.sort((a: any, b: any) => b.currentPrice - a.currentPrice);
    this.currentSort = 'Price: High to Low';
  }
  // Reset to the original product list
  restoreDefault() {
    this.products = [...this.originalProducts];
    this.currentSort = 'Default Sorting';
  }
  // CATEGORY FILTERS
  filterByCeramic() {
    this.products = this.originalProducts.filter(
      (product: any) => product.category === 'Ceramic'
    );
    this.selectedCategory = 'Ceramic';
  }

  // Filter by pottery
  filterByPottery() {
    this.products = this.originalProducts.filter(
      (product: any) => product.category === 'Pottery'
    );
    this.selectedCategory = 'Pottery';
  }
  // Filter by kitchenware
  filterByKitchenware() {
    this.products = this.originalProducts.filter(
      (product: any) => product.category === 'Ceramic Kitchenware'
    );
    this.selectedCategory = 'Ceramic Kitchenware';
  }

  // Method to add product to cart and show toast
  addToCart(product: any): void {
    this.cartService.addToCart(product, this.quantity);
    this.toast.showToast(`${product.name} added to cart!`);
  }
}
