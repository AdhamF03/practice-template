import { Component, OnInit, inject } from '@angular/core';
import { ServiceService } from '../../../../core/services/service.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ScrollToTopComponent } from "../../../shared/scroll-to-top/scroll-to-top.component";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, ScrollToTopComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent implements OnInit {
  readonly router = inject(Router);
  products: any;
  product: any;
  inputValue: number = 1;

  constructor(private route: ActivatedRoute, private service: ServiceService) {}
  ngOnInit() {
    window.scrollTo(0, 0);
    this.products = this.service.products;
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.product = this.service.getProductById(Number(id));
    });
  }
}
