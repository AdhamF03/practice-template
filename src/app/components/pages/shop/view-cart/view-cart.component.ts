
import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CartService } from '../../../../core/services/cart.service';
import { ScrollToTopComponent } from "../../../shared/scroll-to-top/scroll-to-top.component";
import { Subscription } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-view-cart',
  standalone: true,
  imports: [MatTableModule, ScrollToTopComponent, RouterLink],

  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss'],
})
export class ViewCartComponent implements OnInit, OnDestroy {
  cartItems: any[] = [];

  displayedColumns: string[] = ['product', 'price', 'quantity', 'subtotal', 'actions'];
  private cartSubscription: Subscription = new Subscription(); // Initialize subscription


  constructor(private cartService: CartService) {}
  readonly router = inject(Router);

  // Subscribe to cart items
  ngOnInit(): void {
    this.cartSubscription = this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }

  // Unsubscribe from cart items
  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
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
