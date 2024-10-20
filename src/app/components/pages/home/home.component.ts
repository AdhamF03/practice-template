import { Component, inject } from '@angular/core';
import { ScrollToTopComponent } from '../../shared/scroll-to-top/scroll-to-top.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ScrollToTopComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly router = inject(Router);
}
