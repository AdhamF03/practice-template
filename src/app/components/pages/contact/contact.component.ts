import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ScrollToTopComponent } from '../../shared/scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ScrollToTopComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  readonly router = inject(Router);
  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
