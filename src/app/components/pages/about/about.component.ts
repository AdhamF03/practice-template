import { Component, inject } from '@angular/core';
import { ScrollToTopComponent } from "../../shared/scroll-to-top/scroll-to-top.component";
import { Router } from '@angular/router';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ScrollToTopComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  readonly router = inject(Router);

}
