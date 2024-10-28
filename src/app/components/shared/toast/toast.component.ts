import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ToastComponent {
  @Input() message: string = '';
  isVisible: boolean = false;

  showToast(message: string): void {
    this.message = message;
    this.isVisible = true;
    setTimeout(() => (this.isVisible = false), 3000);
  }
}
