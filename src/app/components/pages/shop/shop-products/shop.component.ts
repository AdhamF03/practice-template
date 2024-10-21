import { Component, OnInit, inject } from '@angular/core';
import { ServiceService } from '../../../../core/services/service.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent implements OnInit {
  readonly router = inject(Router);
  products: any[] = [];
  inputValue: number = 1;

  // constructor(private route: ActivatedRoute, private service: ServiceService) {}
  constructor(private serviceService: ServiceService) {}
  ngOnInit() {
    this.products = this.serviceService.products;
    // this.route.paramMap.subscribe((params) => {
    //   const id = params.get('id');
    //   this.product = this.service.getProductById(Number(id));
    // });
  }
}
