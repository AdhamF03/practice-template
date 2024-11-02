import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ScrollToTopComponent } from '../../shared/scroll-to-top/scroll-to-top.component';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    ScrollToTopComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactForm!: FormGroup;
  required!: any;

  constructor(private fb: FormBuilder) {}
  readonly router = inject(Router);
  ngOnInit() {
    window.scrollTo(0, 0);
  }

  initForm() {
    this.contactForm = this.fb.group({
      first_name: [null, Validators.required],
      last_name: [null, Validators.required],
      email: [null, Validators.required],
    });
  }
}
