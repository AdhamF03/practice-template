import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = [];

  // Add a product to the cart
  addToCart(product: any, quantity: number): void {
    const existingItem = this.cartItems.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cartItems.push({ product, quantity });
    }
  }

  // Get all items in the cart
  getCartItems(): any[] {
    return this.cartItems;
  }

  // Clear the cart
  clearCart(): void {
    this.cartItems = [];
  }

  // Update the quantity of a product in the cart
  updateQuantity(productId: number, quantity: number): void {
    const item = this.cartItems.find(item => item.product.id === productId);
    if (item) {
      item.quantity = Math.max(1, quantity); // Ensure quantity is at least 1
    }
  }

  // Remove a product from the cart
  removeFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter(item => item.product.id !== productId);
  }
}
