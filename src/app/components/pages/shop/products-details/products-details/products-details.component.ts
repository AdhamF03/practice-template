import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../../../../core/services/service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.scss',
})
export class ProductsDetailsComponent implements OnInit {
  readonly router = inject(Router);
  product: any;
  quantity: number = 1;

  // Change the quantity of the product
  changeQuantity(change: number): void {
    this.quantity = Math.max(1, this.quantity + change);
  }

  constructor(
    private route: ActivatedRoute,
    private service: ServiceService
  ) {}

  // Get the product by id
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.product = this.service.getProductById(Number(id));
    });
  }
}
