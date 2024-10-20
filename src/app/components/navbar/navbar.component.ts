import { Component, ElementRef, Renderer2 } from '@angular/core';
// import { sideBtn } from './button.directive';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  // Function to handle click event on the button
  onClickBtn(): void {
    const sideBar = this.el.nativeElement.querySelector('.close');
    if (sideBar) {
      if (sideBar.classList.contains('collapse')) {
        this.renderer.removeClass(sideBar, 'collapse');
      } else {
        this.renderer.addClass(sideBar, 'collapse');
      }
    }
  }
}
