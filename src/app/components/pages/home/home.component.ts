import { Component, inject } from '@angular/core';
import { ServiceService } from '../../../core/services/service.service';
import { ScrollToTopComponent } from '../../shared/scroll-to-top/scroll-to-top.component';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ScrollToTopComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly router = inject(Router);
  products: any;
  saleProducts: any;
  product: any;
  trendingProducts: any;

  constructor(private service: ServiceService, private route: ActivatedRoute) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    this.products = this.service.products;
    this.saleProducts = this.products.filter((product: any) => product.oldPrice).slice(0, 6);
    this.trendingProducts = this.products.slice(0, 3);

    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.product = this.service.getProductById(Number(id));
    });
  }
}
