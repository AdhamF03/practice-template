import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() {
    // Initialize with existing cart items if needed
    this.cartItemsSubject.next(this.getCartItems());
  }

  // Function to add a product to the cart
  addToCart(product: any, quantity: number): void {
    const currentItems = this.cartItemsSubject.getValue();
    const existingItem = currentItems.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      currentItems.push({ product, quantity });
    }
    this.cartItemsSubject.next(currentItems);
  }

  // Function to get the cart items
  getCartItems(): any[] {
    return this.cartItemsSubject.getValue();
  }

  // Function to update the quantity of a product in the cart
  updateQuantity(productId: number, quantity: number): void {
    const currentItems = this.cartItemsSubject.getValue();
    const item = currentItems.find(item => item.product.id === productId);
    if (item) {
      item.quantity = Math.max(1, quantity);
    }
    this.cartItemsSubject.next(currentItems);
  }

  // Function to remove a product from the cart
  removeFromCart(productId: number): void {
    const currentItems = this.cartItemsSubject.getValue().filter(item => item.product.id !== productId);
    this.cartItemsSubject.next(currentItems);
  }

  // Function to clear the cart
  clearCart(): void {
    this.cartItemsSubject.next([]);
  }

  // Function to get the total quantity of items in the cart
  getTotalQuantity(): number {
    return this.cartItemsSubject.getValue().reduce((total, item) => total + item.quantity, 0);
  }
}
