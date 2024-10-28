import { Component, OnInit, OnDestroy, inject, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../../../core/services/service.service';
import { CommonModule } from '@angular/common';
import { ScrollToTopComponent } from '../../../shared/scroll-to-top/scroll-to-top.component';
import { CartService } from '../../../../core/services/cart.service';
import { ToastComponent } from '../../../shared/toast/toast.component';

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [CommonModule, ScrollToTopComponent, ToastComponent],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.scss',
})
export class ProductsDetailsComponent implements OnInit, OnDestroy {
  readonly router = inject(Router);
  product: any;
  quantity: number = 1;
  relatedProducts: any[] = [];
  activeTab: string = 'description';
  mainImage: string = '';
  isModalVisible: boolean = false;
  currentIndex: number = 0;
  zoomLevel: number = 0.8;
  zoomStyle: string = 'scale(0.8)';
  maxZoomLevel: number = 0.8;

  // Change the quantity of the product
  changeQuantity(change: number): void {
    this.quantity = Math.max(1, this.quantity + change);
  }

  constructor(
    private route: ActivatedRoute,
    private service: ServiceService,
    private cartService: CartService
  ) {}

  @ViewChild(ToastComponent) toast!: ToastComponent;

  // Get the product by id & Randomly select 4 products
  ngOnInit() {
    window.scrollTo(0, 0);
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.product = this.service.getProductById(Number(id));
      this.mainImage = this.product.mainImage; // Initialize main image
      this.relatedProducts = this.shuffleArray(
        this.service.products.filter((p) => p.id !== this.product.id)
      ).slice(0, 4);
    });
    // Add event listener for keydown event
    window.addEventListener('keydown', this.handleKeyDown);
  }

  ngOnDestroy() {
    // Remove event listener for keydown event
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  // Handle keydown event
  handleKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape' && this.isModalVisible) {
      this.closeModal();
    }
    if (event.key === 'ArrowLeft' && this.isModalVisible) {
      this.prevImage();
    }
    if (event.key === 'ArrowRight' && this.isModalVisible) {
      this.nextImage();
    }
  };

  // Utility function to shuffle an array
  private shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Method to update the main image
  updateMainImage(imageUrl: string): void {
    this.mainImage = imageUrl;
  }

  // Method to open the modal
  openModal(index: number): void {
    this.currentIndex = index;
    this.mainImage = this.product.thumbnailImages[index].url;
    this.isModalVisible = true;
  }

  // Method to close the modal
  closeModal(): void {
    this.isModalVisible = false;
    this.zoomLevel = 0.8;
    this.zoomStyle = 'scale(0.8)';
  }

  // Method to navigate to the previous modal image
  prevImage(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.product.thumbnailImages.length) %
      this.product.thumbnailImages.length;
    this.mainImage = this.product.thumbnailImages[this.currentIndex].url;
  }

  // Method to navigate to the next modal image
  nextImage(): void {
    this.currentIndex =
      (this.currentIndex + 1) % this.product.thumbnailImages.length;
    this.mainImage = this.product.thumbnailImages[this.currentIndex].url;
  }

  // Method to zoom in the image
  zoomIn(): void {
    this.zoomLevel += 0.1;
    this.zoomStyle = `scale(${this.zoomLevel})`;
    if (this.zoomLevel >= this.maxZoomLevel) {
      this.zoomLevel = this.maxZoomLevel;
    }
  }

  // Method to toggle full screen
  toggleFullScreen(): void {
    const elem = document.documentElement;

    if (!document.fullscreenElement) {
      elem.requestFullscreen?.() ||
        (elem as any).webkitRequestFullscreen?.() ||
        (elem as any).msRequestFullscreen?.();
    } else {
      document.exitFullscreen?.() ||
        (document as any).webkitExitFullscreen?.() ||
        (document as any).msExitFullscreen?.();
    }
  }

  // Method to navigate to the previous product
  previousProduct(): void {
    if (this.product.id > 1) {
      this.router.navigate(['/shop', this.product.id - 1]);
    }
  }

  // Method to navigate to the next product
  nextProduct(): void {
    if (this.product.id < this.service.products.length) {
      this.router.navigate(['/shop', this.product.id + 1]);
    }
  }

  // Method to add product to cart and show toast
  addToCart(): void {
    this.cartService.addToCart(this.product, this.quantity);
    this.toast.showToast(`${this.product.name} added to cart!`);
  }
}
