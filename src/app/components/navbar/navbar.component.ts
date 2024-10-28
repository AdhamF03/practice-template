import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  NavigationEnd,
} from '@angular/router';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isSidebarOpen = false;
  isCartSidebarOpen = false;
  cartItems: any[] = [];

  constructor(private router: Router, private cartService: CartService) {
    // Subscribe to router events to close the sidebar on navigation
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.closeSidebar();
        this.closeCartSidebar();
      }
    });
    this.cartItems = this.cartService.getCartItems();
  }

  // Function to handle click event on the button
  onClickBtn(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  // Function to close the sidebar
  closeSidebar(): void {
    this.isSidebarOpen = false;
  }

  // Listen for ESC key press
  @HostListener('document:keydown.escape', ['$event'])
  handleEscape(): void {
    this.closeSidebar();
    this.closeCartSidebar();
  }
  // Function to toggle the cart sidebar
  toggleCartSidebar() {
    this.isCartSidebarOpen = !this.isCartSidebarOpen;
  }

  // Function to close the cart sidebar
  closeCartSidebar(): void {
    this.isCartSidebarOpen = false;
  }

  // Function to change the quantity of a cart item
  changeCartItemQuantity(productId: number, change: number): void {
    const item = this.cartItems.find((item) => item.product.id === productId);
    if (item) {
      const newQuantity = Math.max(1, item.quantity + change);
      this.cartService.updateQuantity(productId, newQuantity);
      this.cartItems = this.cartService.getCartItems(); // Refresh the cart items
    }
  }

  // Function to get the total price of a cart item
  getTotalPrice(item: any): number {
    return item.product.currentPrice * item.quantity;
  }

  // Function to remove a cart item
  removeCartItem(productId: number): void {
    this.cartService.removeFromCart(productId);
    this.cartItems = this.cartService.getCartItems(); // Refresh the cart items
  }

  // Function to handle input for quantity
  onQuantityInput(productId: number, event: any): void {
    const inputQuantity = event.target.valueAsNumber;
    const validQuantity = isNaN(inputQuantity) ? 1 : Math.max(1, inputQuantity);
    this.cartService.updateQuantity(productId, validQuantity);
    this.cartItems = this.cartService.getCartItems();
  }

  // Function to get the subtotal of the cart
  getSubtotal(): number {
    return this.cartItems.reduce(
      (total, item) => total + this.getTotalPrice(item),
      0
    );
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = this.cartService.getCartItems(); // Refresh the cart items
  }
}
