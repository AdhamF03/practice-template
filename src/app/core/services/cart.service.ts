import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<any[]>(this.loadCartFromLocalStorage());
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() {}

  // Function to load the cart items from local storage
  private loadCartFromLocalStorage(): any[] {
    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : [];
  }

  // Function to save the cart items to local storage
  private saveCartToLocalStorage(cartItems: any[]): void {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
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
    this.saveCartToLocalStorage(currentItems);
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
    this.saveCartToLocalStorage(currentItems);
  }

  // Function to remove a product from the cart
  removeFromCart(productId: number): void {
    const currentItems = this.cartItemsSubject.getValue().filter(item => item.product.id !== productId);
    this.cartItemsSubject.next(currentItems);
    this.saveCartToLocalStorage(currentItems);
  }

  // Function to clear the cart
  clearCart(): void {
    this.cartItemsSubject.next([]);
    this.saveCartToLocalStorage([]);
  }

  // Function to get the total quantity of items in the cart
  getTotalQuantity(): number {
    return this.cartItemsSubject.getValue().reduce((total, item) => total + item.quantity, 0);
  }
}
