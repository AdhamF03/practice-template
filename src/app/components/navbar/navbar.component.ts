import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  NavigationEnd,
} from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isSidebarOpen = false;

  constructor(private router: Router) {
    // Subscribe to router events to close the sidebar on navigation
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.closeSidebar();
      }
    });
  }

  // Function to handle click event on the button
  onClickBtn(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  // Function to close the sidebar
  closeSidebar(): void {
    this.isSidebarOpen = false;
  }

  // Listen for ESC key press
  @HostListener('document:keydown.escape', ['$event'])
  handleEscape(): void {
    this.closeSidebar();
  }
}
