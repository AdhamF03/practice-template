import { Component, inject, OnInit } from '@angular/core';
import * as countries from './../../../../../../public/countries.json';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../../../../core/services/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  checkoutForm!: FormGroup;
  required!: any;
  countriesList: string[] = countries.countries;
  products: any = [];
  selectedCountry: string = '';

  constructor(private service: ServiceService, private fb: FormBuilder) {}

  ngOnInit() {
    this.products = this.service.products;
    this.initForm();
  }

  initForm() {
    this.checkoutForm = this.fb.group({
      username: [null, Validators.required, Validators.minLength(8)],
      first_name: [null, Validators.required],
      last_name: [null, Validators.required],
      company_name: [null],
      country: [null, Validators.required],
      address: [null, Validators.required],
      apartment: [null],
      city: [null, Validators.required],
      state: [null, Validators.required],
      zip_code: [null, Validators.required],
      phone: [null, Validators.required],
    });
  }

  selectCountry(country: string) {
    this.selectedCountry = country;
    this.checkoutForm.get('country')?.setValue(country);
  }

  onSubmit() {
    console.log(
      'submitted form',
      this.checkoutForm.value,
      this.checkoutForm.invalid
    );
  }
}
