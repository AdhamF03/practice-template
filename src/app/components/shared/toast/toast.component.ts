import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink],
})
export class ToastComponent {
  @Input() message: string = '';
  isVisible: boolean = false;
  readonly router = inject(Router);

  showToast(message: string): void {
    this.message = message;
    this.isVisible = true;
    setTimeout(() => (this.isVisible = false), 5000);
  }
}
