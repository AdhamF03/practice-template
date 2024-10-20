import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [],
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Show the button when the user scrolls down 500px from the top
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollToTopBtn = this.el.nativeElement.querySelector('#scrollToTopBtn');
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition > 500) {
      this.renderer.setStyle(scrollToTopBtn, 'display', 'block');
    } else {
      this.renderer.setStyle(scrollToTopBtn, 'display', 'none');
    }
  }

  // Scroll to the top of the document when the button is clicked
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
