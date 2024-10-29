import { Component, inject, ViewChild } from '@angular/core';
import { ServiceService } from '../../../core/services/service.service';
import { ScrollToTopComponent } from '../../shared/scroll-to-top/scroll-to-top.component';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastComponent } from '../../shared/toast/toast.component';
import { CartService } from '../../../core/services/cart.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ScrollToTopComponent, ToastComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly router = inject(Router);
  @ViewChild(ToastComponent) toast!: ToastComponent;
  products: any;
  saleProducts: any;
  product: any;
  trendingProducts: any;
  quantity: number = 1;
  constructor(
    private service: ServiceService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    this.products = this.service.products;
    this.saleProducts = this.products
      .filter((product: any) => product.oldPrice)
      .slice(0, 6);
    this.trendingProducts = this.products.slice(0, 3);

    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.product = this.service.getProductById(Number(id));
    });
  }

  // Method to add product to cart and show toast
  addToCart(product: any): void {
    this.cartService.addToCart(product, this.quantity);
    this.toast.showToast(`${product.name} added to cart!`);
  }
}
