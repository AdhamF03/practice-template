import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

import { MatTableModule } from '@angular/material/table';
import { CartService } from '../../../../core/services/cart.service';
import { ScrollToTopComponent } from '../../../shared/scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-view-cart',
  standalone: true,
  imports: [ScrollToTopComponent, MatTableModule, RouterLinkActive, RouterLink],
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss'],
})
export class ViewCartComponent implements OnInit {
  cartItems: any[] = [];
  displayedColumns: string[] = [
    'product',
    'price',
    'quantity',
    'subtotal',
    'actions',
  ];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  // Get Subtotal
  getSubtotal(): number {
    return this.cartItems.reduce(
      (sum, item) => sum + item.product.currentPrice * item.quantity,
      0
    );
  }

  // Decrease Quantity
  decreaseQuantity(item: any): void {
    if (item.quantity > 1) {
      this.cartService.updateQuantity(item.product.id, item.quantity - 1);
      this.cartItems = this.cartService.getCartItems();
    }
  }

  // Increase Quantity
  increaseQuantity(item: any): void {
    this.cartService.updateQuantity(item.product.id, item.quantity + 1);
    this.cartItems = this.cartService.getCartItems();
  }

  // Remove Item
  removeItem(item: any): void {
    this.cartService.removeFromCart(item.product.id);
    this.cartItems = this.cartService.getCartItems();
  }
}
